import Nav from "./Nav";
import Footer from "./Footer";
import { UserProvider } from "../lib/authContext";

const Layout = ({ user, children, categories }) => (
  <UserProvider value={{ user }}>
    <Nav categories={categories} />

    <main className="bg-[#F1F2F6] grow pt-20">
      <div className="flex justify-center mx-auto">
        <div className="w-full xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px]">
          {children}
        </div>
      </div>
    </main>

    <Footer />
  </UserProvider>
);

export default Layout;
