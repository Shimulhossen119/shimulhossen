import Spline from "@splinetool/react-spline";

const Robot = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <span className="block w-full h-auto">
        <Spline scene="https://prod.spline.design/84QmQ8NTbjLHB-fl/scene.splinecode" />
        {/* Overlay a div to hide the "Built with Spline" logo */}
        <div
          className="absolute right-0 bottom-0 z-20 bg-slate-950 w-[180px] h-[80px] transprent"
          
        />
      </span>
    </div>
  );
};

export default Robot;