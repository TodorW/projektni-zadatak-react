import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password);
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input">
          <svg
            width="187"
            height="155"
            viewBox="0 0 187 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_39)">
              <path
                d="M6 2H26.012C29.2057 2 32.0236 4.09153 32.9524 7.15136L64.2808 110.352C65.2096 113.412 68.0275 115.503 71.2209 115.503H141.807C145.126 115.503 148.023 113.247 148.839 110.026L161.477 60.1433C162.293 56.9214 165.19 54.6656 168.509 54.6656H181"
                stroke="white"
                strokeWidth="3.75648"
                strokeLinecap="round"
              />
              <path
                d="M109.478 30.9467C108.416 29.8831 106.693 29.8831 105.631 30.9467L88.3197 48.2828C87.2576 49.3466 87.2576 51.0713 88.3197 52.1351C89.382 53.199 91.1045 53.199 92.1668 52.1351L107.554 36.7255L122.942 52.1351C124.005 53.199 125.727 53.199 126.789 52.1351C127.852 51.0713 127.852 49.3466 126.789 48.2828L109.478 30.9467ZM110.275 83.7225V32.873H104.834V83.7225H110.275Z"
                fill="white"
              />
              <path
                d="M88.5129 145.468C93.0199 145.468 96.6735 141.809 96.6735 137.296C96.6735 132.783 93.0199 129.124 88.5129 129.124C84.0059 129.124 80.3523 132.783 80.3523 137.296C80.3523 141.809 84.0059 145.468 88.5129 145.468Z"
                stroke="white"
                strokeWidth="3.00518"
              />
              <path
                d="M128.409 145.468C132.916 145.468 136.57 141.809 136.57 137.296C136.57 132.783 132.916 129.124 128.409 129.124C123.902 129.124 120.249 132.783 120.249 137.296C120.249 141.809 123.902 145.468 128.409 145.468Z"
                stroke="white"
                strokeWidth="3.00518"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_39"
                x="0.121765"
                y="0.121765"
                width="186.756"
                height="154.849"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_39"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_39"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <label className="label-login">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.9946 28.4126V25.7966C26.9946 24.409 26.4434 23.0783 25.4622 22.0971C24.4811 21.1159 23.1503 20.5647 21.7627 20.5647H11.2988C9.91123 20.5647 8.58047 21.1159 7.59929 22.0971C6.61811 23.0783 6.06689 24.409 6.06689 25.7966V28.4126"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5308 15.3327C19.4203 15.3327 21.7627 12.9903 21.7627 10.1008C21.7627 7.21128 19.4203 4.86887 16.5308 4.86887C13.6412 4.86887 11.2988 7.21128 11.2988 10.1008C11.2988 12.9903 13.6412 15.3327 16.5308 15.3327Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              id="user"
              name="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="USERNAME"
            />
          </label>
          <label className="label-login">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.336 20.4627H9.29893C7.24466 20.4627 5.57935 22.1284 5.57935 24.1832V37.2049C5.57935 39.2597 7.24466 40.9254 9.29893 40.9254H35.336C37.3903 40.9254 39.0556 39.2597 39.0556 37.2049V24.1832C39.0556 22.1284 37.3903 20.4627 35.336 20.4627Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.0186 20.4627V13.0217C13.0186 10.5549 13.9983 8.1891 15.7422 6.44478C17.486 4.70047 19.8513 3.72052 22.3175 3.72052C24.7837 3.72052 27.149 4.70047 28.8929 6.44478C30.6367 8.1891 31.6165 10.5549 31.6165 13.0217V20.4627"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
            />
          </label>
        </div>
        <div>
          <button type="submit" className="login-btn">
            REGISTER
          </button>
        </div>
      </form>
      <div className="svg-container">
        <svg
          width="915"
          height="759"
          viewBox="0 0 915 759"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg1"
        >
          <path
            d="M272.403 147.188C128.851 160.645 31.2084 54.6698 0.331299 0L915 3.6797V758.544H812.841C496.518 718.593 549.768 559.314 615.933 484.669C654.573 432.277 724.444 306.046 694.802 220.256C657.749 113.019 451.843 130.367 272.403 147.188Z"
            fill="#264ECA"
          />
        </svg>
      </div>
      <div className="svg-container-2 ">
        <svg
          width="502"
          height="455"
          viewBox="0 0 502 455"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg2"
        >
          <ellipse
            cx="118.229"
            cy="381.414"
            rx="383.229"
            ry="380.586"
            fill="#264ECA"
          />
          <path
            d="M421.002 364.592C421.002 530.656 285.446 665.276 118.229 665.276C-48.9872 665.276 -184.543 530.656 -184.543 364.592C-184.543 198.529 -48.9872 63.9084 118.229 63.9084C285.446 63.9084 421.002 198.529 421.002 364.592Z"
            fill="#244BC5"
          />
          <path
            d="M349.686 377.244C349.686 504.404 245.887 607.488 117.843 607.488C-10.2003 607.488 -114 504.404 -114 377.244C-114 250.084 -10.2003 147 117.843 147C245.887 147 349.686 250.084 349.686 377.244Z"
            fill="#274FC7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Signup;
