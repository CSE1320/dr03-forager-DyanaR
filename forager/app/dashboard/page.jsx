import Search from '@/components/Search';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary

export default function DashboardPage() {
  return (
    <div className="page dash-container">
      <Search />
      <NavBar />
    </div>
  );
}
