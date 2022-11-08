import { useEffect, useState } from 'react';
import './ScrollToTop.scss';

const ScrollToTop = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if (window.scrollY > 600) {
        setShowButton(true)
      } else {
        setShowButton(false);
      }
    })
  },[])


  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <>
      <button className={showButton ? "scroll-top active": "scroll-top"} onClick={goToTop}></button>
    </>
  )
};

export default ScrollToTop;