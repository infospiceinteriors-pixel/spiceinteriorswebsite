import { ReactNode, useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface MainLayoutProps {
  children: ReactNode;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(18, 18, 18, 0.98)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
  '&.scrolled': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(18, 18, 18, 0.95)',
  },
  '&.hidden': {
    transform: 'translateY(-100%)',
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  borderColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
  borderWidth: '1px',
  padding: '6px 20px',
  '&:hover': {
    borderColor: theme.palette.secondary.light,
    color: theme.palette.secondary.light,
    borderWidth: '1px',
    backgroundColor: 'transparent',
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3),
  borderBottom: '1px solid rgba(197, 153, 123, 0.2)',
}));

const MainLayout = ({ children }: MainLayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setDrawerOpen(false);
  };

  const menuItems = [
    { label: 'OUR SERVICES', sectionId: 'services' },
    { label: 'ABOUT', sectionId: 'about' },
    { label: 'CONTACT', sectionId: 'contact' },
    { label: 'FAQs', sectionId: 'faq' },
  ];

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      width: '100%', 
      maxWidth: '100%', 
      overflow: 'hidden',
      boxSizing: 'border-box' 
    }}>
      <StyledAppBar className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
        <Container 
          maxWidth="xl" 
          disableGutters
          sx={{
            px: { xs: 3, sm: 4, md: 6, lg: 8 }
          }}
        >
          <Toolbar sx={{ 
            px: { xs: 2, sm: 4, md: 6 },
            ...(isMobile ? { justifyContent: 'space-between' } : { justifyContent: 'center' })
          }}>
            <Typography
              variant="h6"
              component="div"
              onClick={scrollToTop}
              sx={{ 
                color: 'secondary.main',
                textDecoration: 'none',
                fontFamily: 'Cormorant Garamond',
                fontSize: '1.75rem',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                ...(isMobile ? {} : { position: 'absolute', left: { md: 24, lg: 48 } })
              }}
            >
              WARDROB
            </Typography>

            {isMobile ? (
              <IconButton 
                edge="end" 
                color="secondary" 
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {menuItems.map((item) => (
                  <NavButton 
                    key={item.sectionId} 
                    variant="outlined"
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    {item.label}
                  </NavButton>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: 300,
            backgroundColor: 'primary.main',
            color: 'secondary.main',
          }
        }}
      >
        <DrawerHeader>
          <Typography 
            variant="h6" 
            sx={{ 
              fontFamily: 'Cormorant Garamond',
              cursor: 'pointer'
            }}
            onClick={scrollToTop}
          >
            WARDROB
          </Typography>
          <IconButton 
            onClick={toggleDrawer(false)} 
            sx={{ color: 'secondary.main' }}
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <List sx={{ p: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item.sectionId} 
              onClick={() => scrollToSection(item.sectionId)}
              sx={{ 
                my: 1.5, 
                borderBottom: '1px solid rgba(197, 153, 123, 0.1)',
                pb: 1,
                color: 'secondary.main',
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  color: 'secondary.light',
                }
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  sx: { 
                    fontFamily: 'Cormorant Garamond',
                    fontSize: '1.25rem',
                    letterSpacing: '0.05em'
                  } 
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ 
        flex: 1, 
        width: '100%',
        maxWidth: '100%',
        display: 'flex', 
        flexDirection: 'column',
        overflowX: 'hidden',
        boxSizing: 'border-box'
      }}>
        {children}
      </Box>
      
      <Box 
        component="footer" 
        sx={{ 
          py: 6, 
          width: '100%',
          backgroundColor: 'primary.main',
          color: 'secondary.main',
          borderTop: '1px solid rgba(197, 153, 123, 0.2)'
        }}
      >
        <Container 
          maxWidth="xl"
          sx={{
            px: { xs: 3, sm: 4, md: 6, lg: 8 }
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <Box sx={{ flex: '1 1 300px', minWidth: { xs: '100%', md: 0 } }}>
              <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Cormorant Garamond' }}>
                WARDROB
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 300 }}>
                Elevating personal style through bespoke wardrobe solutions for Delhi's most discerning clientele.
              </Typography>
            </Box>
            <Box sx={{ flex: '1 1 300px', minWidth: { xs: '100%', md: 0 } }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>Legal</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button 
                  sx={{ 
                    color: 'secondary.main', 
                    textAlign: 'left', 
                    justifyContent: 'flex-start',
                    p: 0,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    '&:hover': { color: 'secondary.light', backgroundColor: 'transparent' }
                  }}
                  onClick={() => scrollToSection('faq')}
                >
                  Privacy Statement
                </Button>
                <Button 
                  sx={{ 
                    color: 'secondary.main', 
                    textAlign: 'left', 
                    justifyContent: 'flex-start',
                    p: 0,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    '&:hover': { color: 'secondary.light', backgroundColor: 'transparent' }
                  }}
                  onClick={() => scrollToSection('faq')}
                >
                  Terms & Conditions
                </Button>
              </Box>
            </Box>
            <Box sx={{ flex: '1 1 300px', minWidth: { xs: '100%', md: 0 } }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>Contact</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                Delhi NCR, India<br />
                contact@wardrob.com<br />
                +91 98XXXXXXXX
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.5 }}>
              © {new Date().getFullYear()} Wardrob. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 