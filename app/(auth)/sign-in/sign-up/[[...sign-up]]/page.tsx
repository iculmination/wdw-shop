import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
