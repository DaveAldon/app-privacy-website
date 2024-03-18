import Head from 'next/head';

import AccountDeletionScreen from '../../Components/AccountDeletionScreen';

export default function CareerPathwayAccountManagement() {
  return (
    <>
      <Head>
        <title>Career Pathway Account Support</title>
        <meta
          name='description'
          content={`
          Account deletion request process for the Career Pathway app.`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col gap-4 items-center justify-center h-screen'>
        <img src='/vantage_logo.png' className='w-64' />
        <AccountDeletionScreen />
      </div>
    </>
  );
}
