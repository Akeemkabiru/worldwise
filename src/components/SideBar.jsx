import AppNav from "./AppNav";
import Logo from "./Logo";
import style from "./Sidebar.module.css";
export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <footer className={style.footer}>
        <p>
          &copy; Copyright {new Date().getFullYear()}
          Worldwise Inc
        </p>
      </footer>
    </div>
  );
}
