import { useRef, useState } from 'react';
import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  lovableSpacing as sp,
  lovableTokens as t,
  lovableTypography as type,
  maxContent,
} from '../theme/lovableTokens';
import { analyticsButtons, trackLinktreeButtonClick, trackNavigation, type NavLocation } from '../utils/analytics';

export const mainNavigation = [
  { label: analyticsButtons.navHome.name, path: analyticsButtons.navHome.destination, buttonId: analyticsButtons.navHome.id },
  { label: analyticsButtons.navConsultation.name, path: analyticsButtons.navConsultation.destination, buttonId: analyticsButtons.navConsultation.id },
  { label: analyticsButtons.navProjects.name, path: analyticsButtons.navProjects.destination, buttonId: analyticsButtons.navProjects.id },
  { label: analyticsButtons.navContact.name, path: analyticsButtons.navContact.destination, buttonId: analyticsButtons.navContact.id },
];

export const portfolioDropdownItems = [
  { label: analyticsButtons.navPortfolioAll.name, path: analyticsButtons.navPortfolioAll.destination, buttonId: analyticsButtons.navPortfolioAll.id },
  { label: analyticsButtons.navPortfolioCommercial.name, path: analyticsButtons.navPortfolioCommercial.destination, buttonId: analyticsButtons.navPortfolioCommercial.id },
  { label: analyticsButtons.navPortfolioResidential.name, path: analyticsButtons.navPortfolioResidential.destination, buttonId: analyticsButtons.navPortfolioResidential.id },
  { label: analyticsButtons.navPortfolioPublic.name, path: analyticsButtons.navPortfolioPublic.destination, buttonId: analyticsButtons.navPortfolioPublic.id },
];

interface SiteHeaderProps {
  variant?: 'overlay' | 'solid';
  overlayTone?: 'dark' | 'light';
}

const SiteHeader = ({ variant = 'solid', overlayTone = 'dark' }: SiteHeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [portfolioMenuOpen, setPortfolioMenuOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isOverlay = variant === 'overlay';
  const isLightOverlay = isOverlay && overlayTone === 'light';
  const brandColor = isLightOverlay ? t.foreground : isOverlay ? t.onDark : t.foreground;
  const linkColor = isLightOverlay ? t.mutedForeground : isOverlay ? t.onDarkMuted : t.mutedForeground;
  const linkHoverColor = isLightOverlay ? t.foreground : isOverlay ? t.onDark : t.foreground;
  const activeColor = t.accent;
  const iconColor = isLightOverlay ? t.mutedForeground : isOverlay ? t.onDarkMuted : t.mutedForeground;
  const iconHoverColor = isLightOverlay ? t.accent : isOverlay ? t.onDark : t.accent;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handlePortfolioEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setPortfolioMenuOpen(true);
  };

  const handlePortfolioLeave = () => {
    closeTimerRef.current = setTimeout(() => setPortfolioMenuOpen(false), 120);
  };

  const handleNavClick = (buttonId: string, label: string, destination: string, navLocation: NavLocation) => {
    trackNavigation({ buttonId, label, destination, location: navLocation });
  };

  const navLinkSx = (active: boolean) => ({
    ...type.button,
    fontSize: '0.75rem',
    lineHeight: 1,
    fontWeight: 300,
    color: active ? activeColor : linkColor,
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
    transition: 'color 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    '&:hover': { color: active ? activeColor : linkHoverColor },
  });

  /** Desktop nav row — same box model for text links and Request a session */
  const desktopNavLinkSx = (active: boolean) => ({
    ...navLinkSx(active),
    display: { xs: 'none', lg: 'inline-flex' },
  });

  const renderNavLink = (item: (typeof mainNavigation)[number]) => {
    if (item.label === 'Projects') {
      const portfolioActive = location.pathname.startsWith('/portfolio');
      return (
        <Box
          key={item.path}
          sx={{
            position: 'relative',
            display: { xs: 'none', lg: 'inline-flex' },
            alignItems: 'center',
          }}
          onMouseEnter={handlePortfolioEnter}
          onMouseLeave={handlePortfolioLeave}
        >
          <Link
            component={RouterLink}
            to="/portfolio"
            underline="none"
            onClick={() => {
              handleNavClick(analyticsButtons.navProjects.id, analyticsButtons.navProjects.name, analyticsButtons.navProjects.destination, 'header');
              setPortfolioMenuOpen(false);
            }}
            sx={{
              ...navLinkSx(portfolioActive),
              gap: 0.5,
            }}
          >
            Projects
            <ExpandMoreIcon
              sx={{
                fontSize: '0.875rem',
                opacity: 0.7,
                transition: 'transform 0.2s',
                transform: portfolioMenuOpen ? 'rotate(180deg)' : 'none',
              }}
            />
          </Link>
          {portfolioMenuOpen && (
            <Paper
              elevation={0}
              onMouseEnter={handlePortfolioEnter}
              onMouseLeave={handlePortfolioLeave}
              sx={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '50%',
                transform: 'translateX(-50%)',
                minWidth: 180,
                borderRadius: t.radius,
                py: 0.5,
                zIndex: 1300,
                bgcolor: t.card,
                border: `1px solid ${t.border}`,
                boxShadow: '0 4px 20px rgba(58, 52, 46, 0.08)',
              }}
            >
              {portfolioDropdownItems.map((dropItem) => (
                <Box
                  key={dropItem.path}
                  onClick={() => {
                    handleNavClick(dropItem.buttonId, dropItem.label, dropItem.path, 'dropdown');
                    navigate(dropItem.path);
                    setPortfolioMenuOpen(false);
                  }}
                  sx={{
                    px: 2.5,
                    py: 1.25,
                    cursor: 'pointer',
                    ...type.button,
                    fontSize: '0.7rem',
                    color: t.mutedForeground,
                    whiteSpace: 'nowrap',
                    '&:hover': { color: t.accent, bgcolor: t.muted },
                  }}
                >
                  {dropItem.label}
                </Box>
              ))}
            </Paper>
          )}
        </Box>
      );
    }

    const active = isActive(item.path);
    return (
      <Link
        key={item.path}
        component={RouterLink}
        to={item.path}
        underline="none"
        onClick={() => handleNavClick(item.buttonId, item.label, item.path, 'header')}
        sx={desktopNavLinkSx(active)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: isOverlay ? 'absolute' : 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          bgcolor: isOverlay ? 'transparent' : t.background,
          borderBottom: isOverlay ? 'none' : `1px solid ${t.border}`,
        }}
      >
        <Box
          sx={{
            ...maxContent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            px: sp.pagePx,
            py: { xs: 2.5, md: 3 },
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            onClick={() => handleNavClick(analyticsButtons.navHome.id, analyticsButtons.navHome.name, analyticsButtons.navHome.destination, 'header')}
            sx={{
              fontFamily: t.fontBrand,
              fontSize: { xs: '1.125rem', md: '1.5rem' },
              fontWeight: 400,
              color: brandColor,
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}
          >
            Spice Interiors
          </Link>

          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              gap: 3,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {mainNavigation.map(renderNavLink)}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 }, flexShrink: 0 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              <IconButton
                component="a"
                href={analyticsButtons.socialInstagram.destination}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={analyticsButtons.socialInstagram.name}
                size="small"
                onClick={() =>
                  trackLinktreeButtonClick({
                    buttonId: analyticsButtons.socialInstagram.id,
                    buttonName: analyticsButtons.socialInstagram.name,
                    destinationUrl: analyticsButtons.socialInstagram.destination,
                  })
                }
                sx={{
                  color: iconColor,
                  p: 0.5,
                  '&:hover': { color: iconHoverColor, bgcolor: 'transparent' },
                }}
              >
                <FaInstagram size={18} />
              </IconButton>
              <IconButton
                component="a"
                href={analyticsButtons.socialTiktok.destination}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={analyticsButtons.socialTiktok.name}
                size="small"
                onClick={() =>
                  trackLinktreeButtonClick({
                    buttonId: analyticsButtons.socialTiktok.id,
                    buttonName: analyticsButtons.socialTiktok.name,
                    destinationUrl: analyticsButtons.socialTiktok.destination,
                  })
                }
                sx={{
                  color: iconColor,
                  p: 0.5,
                  '&:hover': { color: iconHoverColor, bgcolor: 'transparent' },
                }}
              >
                <FaTiktok size={18} />
              </IconButton>
            </Box>

            <IconButton
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: { xs: 'inline-flex', lg: 'none' },
                color: brandColor,
                p: 0.5,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: t.background,
            borderLeft: `1px solid ${t.border}`,
          },
        }}
      >
        <Box sx={{ px: 3, py: 3, borderBottom: `1px solid ${t.border}` }}>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            onClick={() => {
              handleNavClick(analyticsButtons.navHome.id, analyticsButtons.navHome.name, analyticsButtons.navHome.destination, 'mobile');
              setDrawerOpen(false);
            }}
            sx={{
              fontFamily: t.fontBrand,
              fontSize: '1.25rem',
              fontWeight: 400,
              color: t.foreground,
            }}
          >
            Spice Interiors
          </Link>
        </Box>
        <List sx={{ px: 1, py: 2 }}>
          {mainNavigation.map((item) =>
            item.label === 'Projects' ? (
              <Box key={item.path}>
                <ListItemButton
                  onClick={() => setMobilePortfolioOpen((prev) => !prev)}
                  selected={location.pathname.startsWith('/portfolio')}
                  sx={{
                    borderRadius: t.radius,
                    '&.Mui-selected': { bgcolor: t.muted, color: t.accent },
                  }}
                >
                  <ListItemText
                    primary="Projects"
                    primaryTypographyProps={{
                      sx: {
                        ...type.button,
                        fontSize: '0.8rem',
                        color: location.pathname.startsWith('/portfolio') ? t.accent : t.foreground,
                      },
                    }}
                  />
                  <ExpandMoreIcon
                    sx={{
                      fontSize: '1rem',
                      color: t.mutedForeground,
                      transition: 'transform 0.2s',
                      transform: mobilePortfolioOpen ? 'rotate(180deg)' : 'none',
                    }}
                  />
                </ListItemButton>
                <Collapse in={mobilePortfolioOpen} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {portfolioDropdownItems.map((dropItem) => (
                      <ListItemButton
                        key={dropItem.path}
                        sx={{ pl: 4, borderRadius: t.radius }}
                        onClick={() => {
                          handleNavClick(dropItem.buttonId, dropItem.label, dropItem.path, 'mobile');
                          navigate(dropItem.path);
                          setDrawerOpen(false);
                          setMobilePortfolioOpen(false);
                        }}
                      >
                        <ListItemText
                          primary={dropItem.label}
                          primaryTypographyProps={{
                            sx: {
                              ...type.button,
                              fontSize: '0.7rem',
                              color: t.mutedForeground,
                            },
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              <ListItemButton
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={() => {
                  handleNavClick(item.buttonId, item.label, item.path, 'mobile');
                  setDrawerOpen(false);
                }}
                selected={isActive(item.path)}
                sx={{
                  borderRadius: t.radius,
                  '&.Mui-selected': { bgcolor: t.muted, color: t.accent },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      ...type.button,
                      fontSize: '0.8rem',
                      color: isActive(item.path) ? t.accent : t.foreground,
                    },
                  }}
                />
              </ListItemButton>
            )
          )}
        </List>
        <Box sx={{ px: 3, py: 2, borderTop: `1px solid ${t.border}`, mt: 'auto' }}>
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <IconButton
              component="a"
              href={analyticsButtons.socialInstagram.destination}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={analyticsButtons.socialInstagram.name}
              size="small"
              onClick={() =>
                trackLinktreeButtonClick({
                  buttonId: analyticsButtons.socialInstagram.id,
                  buttonName: analyticsButtons.socialInstagram.name,
                  destinationUrl: analyticsButtons.socialInstagram.destination,
                })
              }
              sx={{ color: t.mutedForeground, p: 0.5, '&:hover': { color: t.accent } }}
            >
              <FaInstagram size={20} />
            </IconButton>
            <IconButton
              component="a"
              href={analyticsButtons.socialTiktok.destination}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={analyticsButtons.socialTiktok.name}
              size="small"
              onClick={() =>
                trackLinktreeButtonClick({
                  buttonId: analyticsButtons.socialTiktok.id,
                  buttonName: analyticsButtons.socialTiktok.name,
                  destinationUrl: analyticsButtons.socialTiktok.destination,
                })
              }
              sx={{ color: t.mutedForeground, p: 0.5, '&:hover': { color: t.accent } }}
            >
              <FaTiktok size={20} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SiteHeader;
