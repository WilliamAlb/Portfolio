import './LoaderDots.css'
function LoaderDots({idName}) {
  return (
    <div id={idName}>
      <div className='loader-dot' id="loader-s1"></div>
      <div className='loader-dot' id="loader-s2"></div>
      <div className='loader-dot' id="loader-s3"></div>
    </div>
  );
}

export default LoaderDots;