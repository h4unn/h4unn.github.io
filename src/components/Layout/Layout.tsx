import { Outlet } from "react-router-dom";

import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import useRouteLoading from "../../hook/useRouteLoading";
import Loading from "../Loading/Loading";

import cn from "classnames/bind";
import styles from "./Layout.module.scss";

const cx = cn.bind(styles);

export default function Layout() {
  const { isLoaded, loadingCount } = useRouteLoading();
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("Inner")}>
        <Header />
        <main>{isLoaded ? <Outlet /> : <Loading count={loadingCount} />}</main>
        <Footer />
      </div>
    </div>
  );
}
