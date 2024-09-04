import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[url('/photo/download.png')] ">
      <div className=" container mx-auto">
        <div className="flex justify-between">
          <div className="py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="163"
              height="38"
              viewBox="0 0 163 38"
            >
              <g id="Logo" transform="translate(-260 -51)">
                <g id="Logo-2" data-name="Logo" transform="translate(260 51)">
                  <g id="Elements">
                    <path
                      id="Path_1429"
                      data-name="Path 1429"
                      d="M315.086,140.507H275.222v-.894c0-11.325,8.941-20.538,19.933-20.538s19.931,9.213,19.931,20.538Z"
                      transform="translate(-270.155 -115.396)"
                      fill="#f29f05"
                    ></path>
                    <path
                      id="Path_1430"
                      data-name="Path 1430"
                      d="M301.13,133.517a1.488,1.488,0,0,1-1.394-.994,11.361,11.361,0,0,0-10.583-7.54,1.528,1.528,0,0,1,0-3.055,14.353,14.353,0,0,1,13.37,9.527,1.541,1.541,0,0,1-.875,1.966A1.444,1.444,0,0,1,301.13,133.517Z"
                      transform="translate(-264.176 -113.935)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_1431"
                      data-name="Path 1431"
                      d="M297.343,146.544a14.043,14.043,0,0,1-13.837-14.211h2.975a10.865,10.865,0,1,0,21.723,0h2.975A14.043,14.043,0,0,1,297.343,146.544Z"
                      transform="translate(-266.247 -108.544)"
                      fill="#363636"
                    ></path>
                    <path
                      id="Path_1432"
                      data-name="Path 1432"
                      d="M302.183,132.519a7.064,7.064,0,1,1-14.122,0Z"
                      transform="translate(-264.027 -108.446)"
                      fill="#363636"
                    ></path>
                    <path
                      id="Path_1433"
                      data-name="Path 1433"
                      d="M320.332,134.575H273.3a1.528,1.528,0,0,1,0-3.055h47.033a1.528,1.528,0,0,1,0,3.055Z"
                      transform="translate(-271.815 -108.923)"
                      fill="#f29f05"
                    ></path>
                    <path
                      id="Path_1434"
                      data-name="Path 1434"
                      d="M289.154,123.4a1.507,1.507,0,0,1-1.487-1.528v-3.678a1.488,1.488,0,1,1,2.975,0v3.678A1.508,1.508,0,0,1,289.154,123.4Z"
                      transform="translate(-264.154 -116.667)"
                      fill="#f29f05"
                    ></path>
                    <path
                      id="Path_1435"
                      data-name="Path 1435"
                      d="M284.777,138.133H275.3a1.528,1.528,0,0,1,0-3.055h9.474a1.528,1.528,0,0,1,0,3.055Z"
                      transform="translate(-270.84 -107.068)"
                      fill="#363636"
                    ></path>
                    <path
                      id="Path_1436"
                      data-name="Path 1436"
                      d="M284.8,141.691h-6.5a1.528,1.528,0,0,1,0-3.055h6.5a1.528,1.528,0,0,1,0,3.055Z"
                      transform="translate(-269.379 -105.218)"
                      fill="#363636"
                    ></path>
                  </g>
                </g>
                <text
                  id="Quickeat"
                  transform="translate(320 77)"
                  fill="#363636"
                  font-size="20"
                  font-family="Poppins"
                  font-weight="700"
                >
                  <tspan x="0" y="0">
                    QUICK
                  </tspan>
                  <tspan y="0" fill="#f29f05">
                    EAT
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <ul className="flex gap-5 py-8 text-lg ">
            <li className="hover:text-color1 duration-200">
              <a href="">Home</a>
            </li>
            <li className="hover:text-color1 duration-200">
              <a href="/">About Us</a>
            </li>
            <li className="hover:text-color1 duration-200">
              <a href="">Restaurants</a>
            </li>
            <li className="hover:text-color1 duration-200">
              <a href="/Bnner">Pages</a>
            </li>
            <li className="hover:text-color1 duration-200">
              <a href="/Card">Contacts</a>
            </li>
          </ul>
          <div className="flex gap-4 py-8">
            <div className=" bg-white px-3 py-3.5 rounded-lg">
              <FaShoppingBag className=" text-color1   " />
            </div>
            <Link
              href={"/"}
              className="border-2 px-5 py-2 rounded-lg text-white bg-color1 border-color1 hover:bg-slate-50 hover:text-color1 duration-300"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;