
const BottomPage=()=>{
    return(<>
        <div className="h-[2vh] bg-[#4338c9]"></div>
        <div className='h-screen bg-[#ffffff]'>
            <div className="flex flex-col justify-center items-center mt-52">
                <div className="bg-green-700 rounded-full  p-6">
                    <p className="border-1 bg-white p-2 rounded-full"></p>
                </div>
                <div className="border-l-4 border-dotted border-green-700 py-14"></div>
                <div className="bg-yellow-700 rounded-full  p-7">
                    <p className="bg-white p-4 rounded-full">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                             className=" text-green-700" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <g id="Location_On">
                                <g>
                                    <path
                                        d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                                    <path
                                        d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                                </g>
                            </g>
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    </>)
}
export default BottomPage