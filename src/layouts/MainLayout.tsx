import React, { ReactNode, useState } from 'react';
import {
  AppBar,
  Typography,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppButton from '../components/WhatsAppButton';
import { Link, useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';
// Official Social Media Icons from React Icons
import { FaInstagram, FaTiktok } from 'react-icons/fa';

interface MainLayoutProps {
  children: ReactNode;
}

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Playfair Display, serif',
  fontWeight: 500,
  fontSize: '2.5rem',
  letterSpacing: '0.08em',
  textAlign: 'center',
  color: theme.palette.primary.main,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  userSelect: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.7rem',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1.5),
  },
}));

const NavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(2.5),
  width: '100%',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const NavLinkButton = styled(Button)<{ active?: number }>(({ theme, active }) => ({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: '1.08rem',
  color: theme.palette.text.primary,
  background: 'none',
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  padding: '0 0 3px 0',
  minWidth: 0,
  borderBottom: active ? `2px solid ${theme.palette.text.primary}` : '2px solid transparent',
  transition: 'border-color 0.2s',
  '&:hover': {
    background: 'none',
    borderBottom: `2px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.primary,
  },
  '&:focus': {
    outline: 'none !important',
    boxShadow: 'none !important',
    border: 'none',
    background: 'none',
  },
  '&.Mui-focused': {
    outline: 'none !important',
    boxShadow: 'none !important',
    border: 'none',
    background: 'none',
  },
}));

const MobileNavBar = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2, 2, 1.5, 2),
    boxSizing: 'border-box',
    position: 'relative',
  },
}));

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    color: theme.palette.primary.main,
  },
}));

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Atelier', path: '/atelier' },
  { label: 'Shop', path: '/shop' },
  { label: 'Rent', path: '/rent' },
  { label: 'Contact', path: '/contact' },
];

const shopCategories = [
  { label: 'All', value: 'All' },
  { label: 'Furniture', value: 'Furniture' },
  { label: 'Lighting', value: 'Lighting' },
  { label: 'Textiles', value: 'Textiles' },
];

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [shopMenuAnchor, setShopMenuAnchor] = useState<null | HTMLElement>(null);
  const shopMenuOpen = Boolean(shopMenuAnchor);
  const handleShopMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setShopMenuAnchor(event.currentTarget);
  };
  const handleShopMenuClose = () => {
    setShopMenuAnchor(null);
  };
  const [mobileShopOpen, setMobileShopOpen] = useState(false);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      boxSizing: 'border-box',
      backgroundColor: 'background.default',
    }}>
      <AppBar position="static" elevation={0} sx={{ background: 'transparent', boxShadow: 'none', p: 0 }}>
        <Container maxWidth="lg" disableGutters>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', position: 'relative' }}>
            {isMobile ? (
              <MobileNavBar>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <a
                    href="https://www.instagram.com/spice_int/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    style={{ textDecoration: 'none' }}
                  >
                    <SocialIconButton size="small">
                      <FaInstagram size={18} />
                    </SocialIconButton>
                  </a>
                  <a
                    href="https://www.tiktok.com/@spice_interiors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on TikTok"
                    style={{ textDecoration: 'none' }}
                  >
                    <SocialIconButton size="small">
                      <FaTiktok size={18} />
                    </SocialIconButton>
                  </a>
                </Box>
                
                {/* Absolutely positioned logo for true center alignment */}
                <Box sx={{ 
                  position: 'absolute', 
                  left: '50%', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1
                }}>
                  <Link to="/" style={{ textDecoration: 'none', display: 'block', width: 'fit-content' }}>
                    <LogoTypography variant="h1" sx={{ marginTop: 0, marginBottom: 0 }}>
                      SPICE
                    </LogoTypography>
                  </Link>
                </Box>
                
                <IconButton
                  edge="end"
                  color="default"
                  aria-label="menu"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ ml: 'auto' }}
                >
                  <MenuIcon sx={{ fontSize: 32, color: '#222' }} />
                </IconButton>
              </MobileNavBar>
            ) : (
              <>
                <Link to="/" style={{ textDecoration: 'none', display: 'block', width: 'fit-content' }}>
                  <LogoTypography variant="h1">
                    SPICE
                  </LogoTypography>
                </Link>
                <NavBar>
                  {menuItems.map((item) => {
                    if (item.label === 'Shop') {
                      return (
                        <React.Fragment key={item.path}>
                          <NavLinkButton
                            disableRipple
                            active={location.pathname === item.path ? 1 : 0}
                            sx={{ textTransform: 'none', display: 'flex', alignItems: 'center' }}
                            onClick={handleShopMenuOpen}
                            endIcon={<ArrowDropDownIcon sx={{ ml: 0.5, transition: 'transform 0.2s', transform: shopMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
                          >
                            {item.label}
                          </NavLinkButton>
                          <Menu
                            anchorEl={shopMenuAnchor}
                            open={shopMenuOpen}
                            onClose={handleShopMenuClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                            MenuListProps={{ sx: { minWidth: 160 } }}
                          >
                            {shopCategories.map((cat) => (
                              <MenuItem
                                key={cat.value}
                                component={Link}
                                to={cat.value === 'All' ? '/shop' : `/shop?category=${cat.value}`}
                                onClick={handleShopMenuClose}
                                selected={location.pathname === '/shop' && (location.search.includes(cat.value) || (cat.value === 'All' && !location.search))}
                              >
                                {cat.label}
                              </MenuItem>
                            ))}
                          </Menu>
                        </React.Fragment>
                      );
                    }
                    return (
                      <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
                        <NavLinkButton
                          disableRipple
                          active={location.pathname === item.path ? 1 : 0}
                          sx={{ textTransform: 'none' }}
                          onClick={e => (e.currentTarget as HTMLButtonElement).blur()}
                        >
                          {item.label}
                        </NavLinkButton>
                      </Link>
                    );
                  })}
                  
                  {/* Social Media Icons - Aligned with nav buttons */}
                  <SocialMediaContainer>
                    <a
                      href="https://www.instagram.com/spice_int/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      style={{ textDecoration: 'none' }}
                    >
                      <SocialIconButton>
                        <FaInstagram size={20} />
                      </SocialIconButton>
                    </a>
                    <a
                      href="https://www.tiktok.com/@spice_interiors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on TikTok"
                      style={{ textDecoration: 'none' }}
                    >
                      <SocialIconButton>
                        <FaTiktok size={20} />
                      </SocialIconButton>
                    </a>
                  </SocialMediaContainer>
                </NavBar>
              </>
            )}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{ sx: { width: 220 } }}
            >
              <List>
                {menuItems.map((item) => {
                  if (item.label === 'Shop') {
                    return (
                      <React.Fragment key={item.path}>
                        <ListItemButton
                          onClick={() => setMobileShopOpen((open) => !open)}
                          selected={location.pathname === '/shop'}
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              sx: {
                                fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                                fontWeight: location.pathname === item.path ? 600 : 400,
                                fontSize: '1.1rem',
                                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                              },
                            }}
                          />
                          <ArrowDropDownIcon sx={{ ml: 1, transition: 'transform 0.2s', transform: mobileShopOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </ListItemButton>
                        <Collapse in={mobileShopOpen} unmountOnExit>
                          <List component="div" disablePadding>
                            {shopCategories.map((cat) => (
                              <ListItemButton
                                key={cat.value}
                                component={Link}
                                to={cat.value === 'All' ? '/shop' : `/shop?category=${cat.value}`}
                                onClick={() => setDrawerOpen(false)}
                                selected={location.pathname === '/shop' && (location.search.includes(cat.value) || (cat.value === 'All' && !location.search))}
                                sx={{ pl: 4 }}
                              >
                                <ListItemText primary={cat.label} />
                              </ListItemButton>
                            ))}
                          </List>
                        </Collapse>
                      </React.Fragment>
                    );
                  }
                  return (
                    <ListItemButton
                      key={item.path}
                      component={Link}
                      to={item.path}
                      onClick={() => setDrawerOpen(false)}
                      selected={location.pathname === item.path}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          sx: {
                            fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                            fontWeight: location.pathname === item.path ? 600 : 400,
                            fontSize: '1.1rem',
                            color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                          },
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Drawer>
          </Box>
        </Container>
      </AppBar>
      <WhatsAppButton />
      <Box component="main" sx={{
        flex: 1,
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}>
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          py: 6,
          width: '100%',
          backgroundColor: 'background.paper',
          color: 'primary.main',
          borderTop: '1px solid rgba(212, 165, 116, 0.2)',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <Box sx={{ flex: '1 1 300px', minWidth: { xs: '100%', md: 0 } }}>
              <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Playfair Display' }}>
                SPICE
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 300 }}>
                Premium interior design studio creating bespoke spaces that reflect your unique style and elevate your living experience.
              </Typography>
            </Box>
            <Box sx={{ flex: '1 1 300px', minWidth: { xs: '100%', md: 0 } }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>Legal</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    p: 0,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    '&:hover': { color: 'secondary.main', backgroundColor: 'transparent' },
                  }}
                >
                  Privacy Statement
                </Button>
                <Button
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    p: 0,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    '&:hover': { color: 'secondary.main', backgroundColor: 'transparent' },
                  }}
                >
                  Terms & Conditions
                </Button>
              </Box>
            </Box>
            <Box sx={{ flex: '1 1 300px', minWidth: { xs: '100%', md: 0 } }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>Contact</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Rotterdam, Netherlands<br />
                +31 626268470
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.7 }}>
              © {new Date().getFullYear()} Spice Interior Design Studio. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 