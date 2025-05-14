import { Grid } from '@mui/material';
import Navigation from '../../components/Navigation/Navigation';
import SideBar from '../../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <Grid container size={{ xs: 12 }} className="px-5 lg:px-36 justify-between space-x-1">
      <Grid size={{ xs: 0, lg: 2 }} className="hidden lg:block w-full relative">
        <Navigation />
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }} className="lg:block px-10 w-full relative border border-gray-200">
          <Outlet/>
      </Grid>
      <Grid size={{ xs: 0, lg: 3 }} className="hidden lg:block w-full relative">
        <SideBar/>
      </Grid>
    </Grid>
  );
}

export default HomePage;