import { useState } from 'react';
import Logo from '../images/logo.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, Select, InputLabel, FormControl, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Favorite as HeartIcon } from '@mui/icons-material';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [MenuOption, setMenuOption] = useState('');
  const navigate = useNavigate();

  const handleToggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
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
        <Box className="flex items-center">
          <img src={Logo} alt="Logo" className="w-24 h-24 rounded-t-3xl" />
        </Box>

        <Box className="hidden md:flex space-x-4 items-center ml-72 ">
          <Button color="inherit" onClick={() => handleMenuItemClick('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/AboutUs')}>
            About Us
          </Button>

          <FormControl>
            <InputLabel htmlFor="our-work" sx={{ color: 'white', margin:'2px'}}>Our Work</InputLabel>
            <Select
              id="our-work"
              value={MenuOption}
              onChange={handleMenuChange}
              sx={{ color: 'white'}}
            >
                
              <MenuItem value="HelpJobBank">Help Job Bank</MenuItem>
              <MenuItem value="LegalAid">Legal Aid</MenuItem>
              <MenuItem value="FoodAid">Food Aid</MenuItem>
              <MenuItem value="PoorPeopleSupport">Orphan Support</MenuItem>
              <MenuItem value="HealthCare">Health Care</MenuItem>
              <MenuItem value="ShadiMubark">Shadi Mubark</MenuItem>
              <MenuItem value="HelpEducation">Help Education</MenuItem>
              <MenuItem value="OldAgeHome">Old Age Home</MenuItem>
              <MenuItem value="BloodDonation">Blood Donation</MenuItem>
              <MenuItem value="MEdicineCharity">Medicine Charity</MenuItem>
              <MenuItem value="WaterPlant">Water Plant</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="our-impact" sx={{ color: 'white' }}>Our Impact</InputLabel>
            <Select
              id="our-impact"
              value={selectedOption}
              onChange={handleSelectChange}
              sx={{ color: 'white' }}
            >
              <MenuItem value="NewsAndStories">News And Stories</MenuItem>
              <MenuItem value="OurPartners">Our Partners</MenuItem>
              <MenuItem value="Awards">Awards</MenuItem>
            </Select>
          </FormControl>

          <Button color="inherit" onClick={() => handleMenuItemClick('/OurMembers')}>
            Our Members
          </Button>
          <Button color="inherit" onClick={() => handleMenuItemClick('/Contact')}>
            Contact Us
          </Button>

          {/* Donate Now Button */}
          <NavLink to="/DonationForm">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<HeartIcon />}
              sx={{ backgroundColor: 'blue', ml: 2 }}
            >
              Donate Now
            </Button>
          </NavLink>
        </Box>
       {/* Toggler Icon */}
        <IconButton 
        edge="end" 
        color="inherit" 
        aria-label="menu" 
        onClick={handleToggleMenu} 
        className="md:hidden">
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className="md:hidden"
      >
        <MenuItem onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/AboutUs')}>About Us</MenuItem>
        <MenuItem>
          <FormControl>
            <InputLabel htmlFor="our-work" sx={{ color: 'white' }}>Our Work</InputLabel>
            <Select
              id="our-work"
              value={MenuOption}
              onChange={handleMenuChange}
              sx={{ color: 'black' }}
            >
              <MenuItem value="HelpJobBank">Help Job Bank</MenuItem>
              <MenuItem value="LegalAid">Legal Aid</MenuItem>
              <MenuItem value="FoodAid">Food Aid</MenuItem>
              <MenuItem value="PoorPeopleSupport">Orphan Support</MenuItem>
              <MenuItem value="HealthCare">Health Care</MenuItem>
              <MenuItem value="ShadiMubark">Shadi Mubark</MenuItem>
              <MenuItem value="HelpEducation">Help Education</MenuItem>
              <MenuItem value="OldAgeHome">Old Age Home</MenuItem>
              <MenuItem value="BloodDonation">Blood Donation</MenuItem>
              <MenuItem value="MEdicineCharity">Medicine Charity</MenuItem>
              <MenuItem value="WaterPlant">Water Plant</MenuItem>
            </Select>
          </FormControl>
        </MenuItem>
        <MenuItem>
          <FormControl>
            <InputLabel htmlFor="our-impact" sx={{ color: 'black' }}>Our Impact</InputLabel>
            <Select
              id="our-impact"
              value={selectedOption}
              onChange={handleSelectChange}
              sx={{ color: 'black' }}
            >
              <MenuItem value="NewsAndStories">News And Stories</MenuItem>
              <MenuItem value="OurPartners">Our Partners</MenuItem>
              <MenuItem value="Awards">Awards</MenuItem>
            </Select>
          </FormControl>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/OurMembers')}>Our Members</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/Contact')}>Contact Us</MenuItem>
        <MenuItem>
          <NavLink to="/DonationForm" className="bg-red-600 p-2 rounded-lg border-none text-white flex items-center">
            <HeartIcon className="mr-2" /> Donate Now
          </NavLink>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;