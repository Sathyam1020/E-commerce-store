import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";
import NavbarActions from "./NavbarActions";
import getCategories from "@/actions/GetCategories";

export const revalidate = 0; 

const Navbar = async() => { 

  const categories = await getCategories(); 
  // console.log(categories); 

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;