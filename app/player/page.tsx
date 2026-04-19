'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CustomVideoPlayer } from '@/components/custom-video-player';
import { Loader2 } from 'lucide-react';

function PlayerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tmdbId = searchParams.get('id');
  const type = searchParams.get('type') as 'movie' | 'tv' | null;
  const title = searchParams.get('title') || 'Untitled';
  const season = searchParams.get('season');
  const episode = searchParams.get('episode');
  const imdbId = searchParams.get('imdb');
  const posterPath = searchParams.get('poster');
  const totalSeasons = searchParams.get('totalSeasons');
  const episodesPerSeason = searchParams.get('episodesPerSeason');

  // Validate required params
  if (!tmdbId || !type) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Invalid Player URL</h1>
          <p className="text-zinc-400 mb-6">Missing required parameters (id and type)</p>
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

  const handleClose = () => {
    // Try to go back, or go home
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

  return (
    <CustomVideoPlayer
      tmdbId={parseInt(tmdbId, 10)}
      imdbId={imdbId}
      type={type}
      title={decodeURIComponent(title)}
      posterPath={posterPath}
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
