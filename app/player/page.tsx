'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CustomVideoPlayer } from '@/components/custom-video-player';
import { Loader2 } from 'lucide-react';

interface MovieData {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  media_type?: string;
}

function PlayerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tmdbId = searchParams.get('id');
  const type = searchParams.get('type') as 'movie' | 'tv' | null;
  const title = searchParams.get('title');
  const season = searchParams.get('season');
  const episode = searchParams.get('episode');
  const imdbId = searchParams.get('imdb');
  const posterPath = searchParams.get('poster');
  const totalSeasons = searchParams.get('totalSeasons');
  const episodesPerSeason = searchParams.get('episodesPerSeason');

  const [randomContent, setRandomContent] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(!tmdbId || !type);
  const [error, setError] = useState<string | null>(null);

  // Fetch random trending content if no params provided
  useEffect(() => {
    if (!tmdbId || !type) {
      fetchRandomContent();
    }
  }, [tmdbId, type]);

  const fetchRandomContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/trending?type=all&time=day');
      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        // Pick a random movie or TV show from trending
        const filtered = data.results.filter(
          (item: MovieData) => item.media_type === 'movie' || item.media_type === 'tv'
        );
        const randomIndex = Math.floor(Math.random() * Math.min(filtered.length, 10));
        setRandomContent(filtered[randomIndex]);
      } else {
        setError('No content available');
      }
    } catch (err) {
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  // Parse episodes per season if provided
  const parsedEpisodesPerSeason = episodesPerSeason 
    ? episodesPerSeason.split(',').map(Number)
    : undefined;

  // Show loading while fetching random content
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-red-600 animate-spin mx-auto mb-4" />
          <p className="text-zinc-400">Loading player...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error</h1>
          <p className="text-zinc-400 mb-6">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  // Use provided params or random content
  const finalId = tmdbId ? parseInt(tmdbId, 10) : randomContent?.id;
  const finalType = type || (randomContent?.media_type as 'movie' | 'tv') || 'movie';
  const finalTitle = title 
    ? decodeURIComponent(title) 
    : randomContent?.title || randomContent?.name || 'Now Playing';
  const finalPoster = posterPath || randomContent?.poster_path;

  if (!finalId) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">No Content</h1>
          <p className="text-zinc-400 mb-6">Could not find content to play</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <CustomVideoPlayer
      tmdbId={finalId}
      imdbId={imdbId}
      type={finalType}
      title={finalTitle}
      posterPath={finalPoster}
      season={season ? parseInt(season, 10) : 1}
      episode={episode ? parseInt(episode, 10) : 1}
      totalSeasons={totalSeasons ? parseInt(totalSeasons, 10) : 1}
      episodesPerSeason={parsedEpisodesPerSeason}
      onClose={handleClose}
    />
  );
}

export default function PlayerPage() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-red-600 animate-spin mx-auto mb-4" />
            <p className="text-zinc-400">Loading player...</p>
          </div>
        </div>
      }
    >
      <PlayerContent />
    </Suspense>
  );
}
