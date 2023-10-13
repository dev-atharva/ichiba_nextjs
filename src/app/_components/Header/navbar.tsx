"use client";
import Image from "next/image";
import logo_image from "../../../../public/RAKITEN_LOGO.webp";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useCartStore } from "@/app/hooks/cartfunction";

export const HomeNavBar = () => {
  const router = useRouter();
  const cartfunction = useCartStore();
  const loginmodal = useLoginModal();
  return (
    <header>
      <div className="navbar px-10 p-2 shadow-md ">
        {/* <Link href="/" className="btn btn-ghost normal-case text-xl">
          Rakuten New Life
        </Link> */}
        <Image
          src={logo_image}
          alt="Logo of Rakuten"
          height={100}
          width={100}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <div className="md:px-12"></div>

        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[70%]"
          />
        </div>
        {cartfunction.cart.length !== 0 && (
          <a className="btn" onClick={() => router.push("/cart")}>
            View Cart
          </a>
        )}
        <div className="navbar-end">
          <a className="btn" onClick={() => loginmodal.onOpen()}>
            Login
          </a>
        </div>
      </div>
    </header>
  );
};
