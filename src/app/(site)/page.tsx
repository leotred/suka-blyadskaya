import Image from "next/image";

import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 dark:bg-dusk">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height="52"
          width="52"
          className="mx-auto w-auto"
          src="/images/9943F7F3-3457-4C4D-B102-719B96E0511A.png"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
