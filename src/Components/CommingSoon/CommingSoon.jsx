
const CommingSoon = () => {
    return (
        <div className="commingsoon h-[500px] my-12 relative overflow-hidden ">
            <img  className="w-full object-cover h-[500px] hover:scale-105 duration-500 " src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f3832e180145769.6505ae76214ca.jpg" alt="banner image" />
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center space-y-3">
                <p className="uppercase text-lg text-white"> 13 Nov - 25 Dec</p>
                <h2 className="text-3xl font-semibold text-white drop-shadow-xl">The wait is on iPhone 14 max pro</h2>
                <h2 className="text-2xl font-bold text-red-600">$ 999.00</h2>
                <button className="capitalize btn duration-500 bg-red-600  outline-none border-0 rounded-full px-10 text-lg text-white">Shop now</button>
            </div>
        </div>
    );
};

export default CommingSoon;