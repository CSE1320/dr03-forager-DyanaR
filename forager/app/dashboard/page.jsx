import Search from '@/components/Search';
import NavBar from '../../components/NavBar'; // Adjust the path as necessary

export default function DashboardPage() {
  return (
    <div className="page bg-app-background">
      <h1>Dashboard Page</h1>
      <Search />
      <NavBar />
    </div>
  );
}
