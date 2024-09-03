import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, Select, InputLabel, FormControl, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Favorite as HeartIcon } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../public/logo.jpg'; // Adjust the path based on your setup

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [menuOption, setMenuOption] = useState('');
  const navigate = useNavigate();

  const handleToggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value) {
      navigate(`/${value}`);
    }
  };

  const handleMenuChange = (e) => {
    const value = e.target.value;
    setMenuOption(value);
    if (value) {
      navigate(`/${value}`);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f44336' }}>
      <Toolbar className="flex justify-between items-center">
        {/* Logo */}
        <Box className="flex items-center">
          <img src={Logo} alt="Logo" className="w-16 h-16 rounded" />
        </Box>

        {/* Desktop Menu */}
        <Box className="hidden md:flex space-x-4 items-center">
          <Button color="inherit" onClick={() => handleMenuItemClick('/')}>Home</Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/AboutUs')}>About Us</Button>

          {/* Our Work Dropdown */}
          <FormControl>
            <InputLabel htmlFor="our-work" sx={{ color: 'white' }}>Our Work</InputLabel>
            <Select
              id="our-work"
              value={menuOption}
              onChange={handleMenuChange}
              sx={{ color: 'white', minWidth: '150px' }}
            >
              <MenuItem value="FoodAid">Food Aid</MenuItem>
              <MenuItem value="HelpJobBank">Help Job Bank</MenuItem>
              <MenuItem value="LegalAid">Legal Aid</MenuItem>
              <MenuItem value="HealthCare">Health Care</MenuItem>
              <MenuItem value="ShadiMubark">Shadi Mubark</MenuItem>
              <MenuItem value="WaterPlant">Water Plant</MenuItem>
              <MenuItem value="HelpEducation">Help Education</MenuItem>
              <MenuItem value="OldAgeHome">Old Age Home</MenuItem>
              <MenuItem value="BloodDonation">Blood Donation</MenuItem>
              <MenuItem value="MEdicineCharity">Medicine Charity</MenuItem>
              <MenuItem value="PoorPeopleSupport">Orphan Support</MenuItem>
            </Select>
          </FormControl>

          {/* Our Impact Dropdown */}
          <FormControl>
            <InputLabel htmlFor="our-impact" sx={{ color: 'white' }}>Our Impact</InputLabel>
            <Select
              id="our-impact"
              value={selectedOption}
              onChange={handleSelectChange}
              sx={{ color: 'white', minWidth: '150px' }}
            >
              <MenuItem value="NewsAndStories">News And Stories</MenuItem>
              <MenuItem value="OurPartners">Our Partners</MenuItem>
            </Select>
          </FormControl>

          <Button color="inherit" onClick={() => handleMenuItemClick('/OurMembers')}>Our Members</Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/Contact')}>Contact Us</Button>

          <NavLink to="/DonationForm">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<HeartIcon />}
              sx={{ backgroundColor: 'white', color: 'red', '&:hover': { backgroundColor: 'lightgray' } }}
            >
              Donate Now
            </Button>
          </NavLink>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton edge="end" color="inherit" onClick={handleToggleMenu} className="md:hidden">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className="md:hidden"
      >
        <MenuItem onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/AboutUs')}>About Us</MenuItem>

        {/* Our Work Dropdown (Mobile) */}
        <MenuItem>
          <FormControl>
            <InputLabel htmlFor="our-work">Our Work</InputLabel>
            <Select
              id="our-work"
              value={menuOption}
              onChange={handleMenuChange}
              sx={{ color: 'black', minWidth: '150px' }}
            >
               <MenuItem value="FoodAid">Food Aid</MenuItem>
              <MenuItem value="HelpJobBank">Help Job Bank</MenuItem>
              <MenuItem value="LegalAid">Legal Aid</MenuItem>
              <MenuItem value="HealthCare">Health Care</MenuItem>
              <MenuItem value="ShadiMubark">Shadi Mubark</MenuItem>
              <MenuItem value="WaterPlant">Water Plant</MenuItem>
              <MenuItem value="HelpEducation">Help Education</MenuItem>
              <MenuItem value="OldAgeHome">Old Age Home</MenuItem>
              <MenuItem value="BloodDonation">Blood Donation</MenuItem>
              <MenuItem value="MEdicineCharity">Medicine Charity</MenuItem>
              <MenuItem value="PoorPeopleSupport">Orphan Support</MenuItem>
          
            </Select>
          </FormControl>
        </MenuItem>

        {/* Our Impact Dropdown (Mobile) */}
        <MenuItem>
          <FormControl>
            <InputLabel htmlFor="our-impact">Our Impact</InputLabel>
            <Select
              id="our-impact"
              value={selectedOption}
              onChange={handleSelectChange}
              sx={{ color: 'black', minWidth: '150px' }}
            >
              <MenuItem value="NewsAndStories">News And Stories</MenuItem>
              <MenuItem value="OurPartners">Our Partners</MenuItem>
            </Select>
          </FormControl>
        </MenuItem>

        <MenuItem onClick={() => handleMenuItemClick('/OurMembers')}>Our Members</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/Contact')}>Contact Us</MenuItem>
        <MenuItem>
          <NavLink to="/DonationForm" className="flex items-center">
            <HeartIcon sx={{ mr: 1 }} /> Donate Now
          </NavLink>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
