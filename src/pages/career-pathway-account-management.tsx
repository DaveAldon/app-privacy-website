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
      <div className='flex flex-row gap-4 items-center justify-center h-screen'>
        <div className='flex flex-col gap-4 items-center'>
          <img src='/vantage_logo.png' className='w-64' />
          <AccountDeletionScreen />
        </div>
        <div className='flex flex-col'>
          <img src='/android_screenshot.png' className='w-64' />
          <p className='w-64 text-sm text-gray-500 dark:text-gray-400 text-center'>
            Alternatively, you can delete your account directly inside the app
            via Settings {'->'} "Delete My Account"
          </p>
        </div>
      </div>
    </>
  );
}
