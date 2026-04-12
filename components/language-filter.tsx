'use client';

import { useState, useEffect } from 'react';
import { Globe, Loader2, ChevronDown, X, Languages, Mic2 } from 'lucide-react';
import { Movie } from '@/lib/tmdb';
import { cn } from '@/lib/utils';
import { MovieCard } from './movie-card';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'pt', name: 'Portuguese', flag: '🇧🇷' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
];

type Mode = 'original' | 'dubbed';

interface LanguageFilterProps {
  type: 'movie' | 'tv';
}

export function LanguageFilter({ type }: LanguageFilterProps) {
  const [mode, setMode] = useState<Mode>('original');
  const [activeLang, setActiveLang] = useState<string | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!activeLang) return;
    setLoading(true);
    setMovies([]);
    setPage(1);

    // Direct TMDB API call - no Vercel serverless overhead
    const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const params = new URLSearchParams({
      api_key: TMDB_KEY || '',
      sort_by: 'popularity.desc',
      page: '1',
    });
    if (mode === 'original') {
      params.set('with_original_language', activeLang);
    } else {
      params.set('with_spoken_languages', activeLang);
    }
    
    const endpoint = type === 'tv' ? 'discover/tv' : 'discover/movie';
    fetch(`https://api.themoviedb.org/3/${endpoint}?${params}`)
      .then(r => r.json())
      .then(data => {
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      })
      .catch(() => setMovies([]))
      .finally(() => setLoading(false));
  }, [activeLang, type, mode]);

  const loadMore = async () => {
    if (!activeLang || loadingMore) return;
    const next = page + 1;
    setLoadingMore(true);
    try {
      // Direct TMDB API call - no Vercel serverless overhead
      const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const params = new URLSearchParams({
        api_key: TMDB_KEY || '',
        sort_by: 'popularity.desc',
        page: String(next),
      });
      if (mode === 'original') {
        params.set('with_original_language', activeLang);
      } else {
        params.set('with_spoken_languages', activeLang);
      }
      const endpoint = type === 'tv' ? 'discover/tv' : 'discover/movie';
      const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?${params}`);
      const data = await res.json();
      setMovies(prev => [...prev, ...(data.results || [])]);
      setPage(next);
      setTotalPages(data.total_pages || totalPages);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setActiveLang(null);
    setMovies([]);
  };

  const handleLangClick = (code: string) => {
    setActiveLang(code === activeLang ? null : code);
  };

  const activeLangInfo = LANGUAGES.find(l => l.code === activeLang);
  const hasMore = activeLang && page < Math.min(totalPages, 10);

  return (
    <div className="container mx-auto px-4 my-6">

      {/* Header + mode toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <h2 className="text-base md:text-lg font-semibold">Browse by Language</h2>
        </div>

        {/* Mode toggle pill */}
        <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 w-fit">
          <button
            onClick={() => handleModeChange('original')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all',
              mode === 'original'
                ? 'bg-primary text-white shadow-sm'
                : 'text-white/50 hover:text-white'
            )}
          >
            <Languages className="w-3.5 h-3.5" />
            Original
          </button>
          <button
            onClick={() => handleModeChange('dubbed')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all',
              mode === 'dubbed'
                ? 'bg-primary text-white shadow-sm'
                : 'text-white/50 hover:text-white'
            )}
          >
            <Mic2 className="w-3.5 h-3.5" />
            Dubbed In
          </button>
        </div>

        {activeLang && (
          <button
            onClick={() => { setActiveLang(null); setMovies([]); }}
            className="ml-auto flex items-center gap-1 text-xs text-white/50 hover:text-white border border-white/20 px-2.5 py-1 rounded-full"
          >
            <X className="w-3 h-3" /> Clear
          </button>
        )}
      </div>

      {/* Mode hint */}
      <p className="text-xs text-white/35 mb-3">
        {mode === 'original'
          ? 'Shows content originally made in the selected language.'
          : 'Shows content that has been dubbed or spoken in the selected language.'}
      </p>

      {/* Language Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {LANGUAGES.map(lang => (
          <button
            key={lang.code}
            onClick={() => handleLangClick(lang.code)}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all border',
              activeLang === lang.code
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            )}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>

      {/* Results */}
      {activeLang && (
        <div>
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : movies.length > 0 ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{activeLangInfo?.flag}</span>
                <h3 className="font-medium text-white/80">
                  {mode === 'dubbed'
                    ? `Dubbed in ${activeLangInfo?.name}`
                    : `${activeLangInfo?.name} Titles`}
                </h3>
                <span className="text-white/40 text-sm">{movies.length} results</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3">
                {movies.map((movie, i) => (
                  <MovieCard
                    key={`${movie.id}-${i}`}
                    movie={{ ...movie, media_type: movie.media_type || type }}
                  />
                ))}
              </div>
              {hasMore && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2.5 rounded-full text-sm font-medium transition-all disabled:opacity-50"
                  >
                    {loadingMore ? <Loader2 className="w-4 h-4 animate-spin" /> : <ChevronDown className="w-4 h-4" />}
                    {loadingMore ? 'Loading...' : 'Load More'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-white/40 py-12">No results found for this language.</p>
          )}
        </div>
      )}
    </div>
  );
}
