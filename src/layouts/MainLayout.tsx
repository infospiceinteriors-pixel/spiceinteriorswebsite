import { ReactNode, useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { lovableTokens as t } from '../theme/lovableTokens';

interface MainLayoutProps {
  children: ReactNode;
}

const overlayHeaderConfig: Record<
  string,
  { variant: 'overlay'; overlayTone: 'dark' | 'light' }
> = {
  '/': { variant: 'overlay', overlayTone: 'dark' },
  '/consultation': { variant: 'overlay', overlayTone: 'dark' },
  '/consultation/introductory-session': { variant: 'overlay', overlayTone: 'dark' },
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  const overlayConfig = overlayHeaderConfig[location.pathname];
  const headerVariant = overlayConfig?.variant ?? 'solid';
  const headerOverlayTone = overlayConfig?.overlayTone;
  const hideChrome =
    location.pathname === '/link' ||
    location.pathname === '/share-your-home' ||
    location.pathname.startsWith('/coming-soon/');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        bgcolor: t.background,
        color: t.foreground,
        position: 'relative',
      }}
    >
      {!hideChrome && <SiteHeader variant={headerVariant} overlayTone={headerOverlayTone} />}

      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </Box>

      {!hideChrome && <SiteFooter />}
    </Box>
  );
};

export default MainLayout;
