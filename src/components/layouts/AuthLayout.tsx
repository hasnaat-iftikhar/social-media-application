import { FC, ReactNode } from "react";
import type { Metadata } from "next";

// Components
import Container from "@/components/shared/Container";
import BackButton from "@/components/buttons/BackButton";

export const metadata: Metadata = {
  title: "Auth | Social media application",
  description:
    "Welcome to our social media platform where you can connect with friends, share moments, and explore the world. Join the community today!",
};

interface PropTypes {
  children: ReactNode;
}

const AuthLayout: FC<PropTypes> = ({ children }) => {
  return (
    <main>
      <header className="fixed top-[20px] w-full">
        <Container>
          <BackButton />
        </Container>
      </header>
      <section className="h-screen flex flex-row justify-between items-center">
        <div className="max-w-[400px] mx-auto flex flex-col justify-center items-start gap-[14px]">
          <h2 className="text-[24px] font-medium">
            Connect, Share, and Explore!
          </h2>
          <p className="text-[16px] leading-[20px]">
            Welcome to our social media platform where you can connect with
            friends, share moments, and explore the world. Join the community
            today!
          </p>
        </div>
        <div className="w-[600px] h-full bg-primary flex justify-center items-center">
          {children}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
