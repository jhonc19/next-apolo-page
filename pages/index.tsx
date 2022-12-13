import Layout from '../components/Layout';
import Banner from '../components/Banner';
import EquiposT from '../components/EquiposT';
import Preserva from '../components/Preserva';

export default function Home() {
  return (
    <Layout title="Inicio">
      <Banner />
      <EquiposT />
      <Preserva />
    </Layout>
  );
}
