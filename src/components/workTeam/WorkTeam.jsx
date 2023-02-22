import { GrGithub, GrLinkedin } from "react-icons/gr";
import { Us } from "@/mocks/photosAboutUs";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
const WorkTeam = () => {
  console.log(Us);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.titleTeam}>
          <h3> Il nostro team </h3>
          <p>
            Ti piace questo progetto? Scopri i professionisti che lo hanno
            realizzato
          </p>
        </div>
        <div className={styles.photos}>
          <div className={styles.div}>
            <Image
              src={Us[0].Photo_first}
              alt="13"
              width={400}
              height={400}
              priority
            />
            <div className={styles.icons}>
              <Link
                href={"https://www.linkedin.com/in/chiara-cirrito-90a2021b7/"}
              >
                <GrLinkedin className={styles.icon} />
              </Link>
              <Link href={"https://github.com/chiacirrito"}>
                <GrGithub />
              </Link>
              <Link
                href={"https://chiacirrito.github.io/newportfolio/home.html"}
              >
                <CgWebsite />
              </Link>
            </div>
          </div>
          <div className={styles.div}>
            <Image src={Us[1].Photo_second} width={400} height={400} priority />
            <div className={styles.icons}>
              <Link href={"https://www.linkedin.com/in/edwardcatrimi/"}>
                <GrLinkedin />
              </Link>
              <Link href={"https://github.com/edwardsicily"}>
                <GrGithub />
              </Link>
            </div>
          </div>
          <div className={styles.div}>
            <Image
              src={Us[2].Photo_third}
              alt="13"
              width={400}
              height={400}
              priority
            />
            <div className={styles.icons}>
              <Link
                href={"https://www.linkedin.com/in/francescodecarocarella/"}
              >
                <GrLinkedin />
              </Link>
              <Link href={"https://github.com/FrancescoDeCaroCarella"}>
                <GrGithub />
              </Link>
              <Link href={"https://francescodecarocarella.it/"}>
                <CgWebsite />
              </Link>
            </div>
          </div>
          <div className={styles.div}>
            <Image
              src={Us[3].Photo_fourth}
              alt="13"
              width={400}
              height={400}
              priority
            />
            <div className={styles.icons}>
              <Link href={"https://www.linkedin.com/in/gabriele-chiaramonte/"}>
                <GrLinkedin />
              </Link>
              <Link href={"https://github.com/Gabriele9102"}>
                <GrGithub />
              </Link>
            </div>
          </div>
          <div className={styles.div}>
            <Image
              src={Us[4].Photo_fifth}
              alt="13"
              width={400}
              height={400}
              priority
            />
            <div className={styles.icons}>
              <Link href={"https://www.linkedin.com/in/hysen-shemollari/"}>
                <GrLinkedin />
              </Link>
              <Link href={"https://github.com/ZaoTosh"}>
                <GrGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <Link href={"/about"}>
            <button type="button">Scopri di più</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default WorkTeam;
