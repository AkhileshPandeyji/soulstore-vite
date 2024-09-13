// library imports
import { PropsWithChildren, /* useEffect */ } from "react";

// local imports
// data
import FooterJson from "../../data/Footer.json";

// Components
import AppLinks from "./AppLinks/AppLinks";
// styles
import styles from "./Footer.module.scss";

interface FooterProps extends PropsWithChildren {
  hide?: boolean;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {

  const { hide = false } = props;

  // Testing Error Boundary
  // useEffect(() => {
  // throw new Error("Error Message Testing!!!");
  // }, [])

  if (hide) return null;

  return (
    <div className={styles.Container}>
      <AppLinks
        titleText={FooterJson.appLinks.titleText}
        titleIcon={FooterJson.appLinks.titleIcon}
        platformImgs={FooterJson.appLinks.platformImgs}
      />
      <div className={styles.Copyright}> &copy; {FooterJson.copyrightText} </div>
    </div>
  )
};

export default Footer;