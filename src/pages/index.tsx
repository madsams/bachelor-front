import type { NextPage, GetServerSidePropsContext } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <div>
    <Head>
      <title />
    </Head>
  </div>
);

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { cookies } = req;
  // todo
  if (true || (cookies && cookies.loginInfo)) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}
