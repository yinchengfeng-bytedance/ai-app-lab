import React from 'react';

import { close } from '@ai-app/bridge-api/procode';

import TipItem from './components/TipItem';
import { FloatingPanel, FloatingPanelRef } from 'antd-mobile';
import oneRight from '@/images/1right.png';
import oneWrong from '@/images/1wrong.png';
import twoWrong from '@/images/2wrong.png';
import threeRight from '@/images/3right.png';
import threeWrong from '@/images/3wrong.png';
import styles from './index.module.less';
const anchors = [window.innerHeight * 0.88];

const RecognitionGuide: React.FC = () => {
  const floatingPanelRef = React.useRef<FloatingPanelRef>(null);
  // 模拟图片资源
  const tipItems = [
    {
      index: 1,
      title: '拍摄保持题目信息清晰、完整',
      correctImage: oneRight,
      incorrectImage: oneWrong
    },
    {
      index: 2,
      title: '拍照时保持光线正常',
      correctImage: oneRight, // 一样的图
      incorrectImage: twoWrong
    },
    {
      index: 3,
      title: '框选单题，识别更准确',
      correctImage: threeRight,
      incorrectImage: threeWrong
    }
  ];

  const handleRetakePhoto = () => {
    close();
  };

  return (
    <FloatingPanel className={styles.panel} ref={floatingPanelRef} anchors={anchors}>
      <div className="max-w-md mx-auto px-4 py-4 pt-[12px]">
        {/* 标题部分 */}
        <div className="mb-[24px]">
          <h1 className="text-[22px] font-bold mb-[8px]">识别错误</h1>
          <p className="text-[#AAA7A7]">一起看看拍照方法，提高题目识别正确率</p>
        </div>

        {/* 拍照技巧列表 */}
        <div>
          {tipItems.map((item) => (
            <TipItem
              key={item.index}
              index={item.index}
              title={item.title}
              correctImage={item.correctImage}
              incorrectImage={item.incorrectImage}
            />
          ))}
        </div>

        <div
          onClick={handleRetakePhoto}
          className="w-full h-[58px] bg-[#0AB76A] hover:bg-green-600 text-white rounded-[16px] flex items-center justify-center text-[18px] font-medium transition duration-200 mt-[30px]"
        >
          <svg
            className="mr-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <circle cx="17" cy="18.5" r="2.75" stroke="white" strokeWidth="1.5" />
            <mask id="path-2-inside-1_109_115325" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3838 10.9773L10.5649 10.9129C15.0033 9.33372 19.8506 9.33372 24.289 10.9129L24.4701 10.9773C26.4089 11.6672 27.8259 13.3478 28.178 15.3754L28.2431 15.7497L26.7652 16.0065L26.7002 15.6321C26.4406 14.1377 25.3962 12.899 23.9672 12.3905L23.7862 12.3261L24.2858 10.9219L23.7862 12.3261C19.673 10.8626 15.1809 10.8626 11.0677 12.3261L10.8866 12.3905C9.45764 12.899 8.41328 14.1377 8.1537 15.6321L8.08867 16.0065C7.73461 18.0447 7.78117 20.1325 8.22572 22.153C8.52702 23.5224 9.57148 24.6068 10.9286 24.9593L11.9635 25.228C15.5463 26.1586 19.3075 26.1586 22.8904 25.228L23.9252 24.9593C25.2824 24.6068 26.3268 23.5224 26.6282 22.153C27.0727 20.1325 27.1193 18.0447 26.7652 16.0065L28.2431 15.7497C28.6305 17.9801 28.5795 20.2645 28.0931 22.4753C27.6705 24.3959 26.2057 25.9168 24.3023 26.4111L23.2675 26.6799C19.4373 27.6746 15.4166 27.6746 11.5864 26.6799L10.5516 26.4111C8.64818 25.9168 7.18334 24.3959 6.76076 22.4753C6.27433 20.2645 6.22339 17.9801 6.6108 15.7497L6.67583 15.3754C7.02802 13.3478 8.44498 11.6672 10.3838 10.9773Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3838 10.9773L10.5649 10.9129C15.0033 9.33372 19.8506 9.33372 24.289 10.9129L24.4701 10.9773C26.4089 11.6672 27.8259 13.3478 28.178 15.3754L28.2431 15.7497L26.7652 16.0065L26.7002 15.6321C26.4406 14.1377 25.3962 12.899 23.9672 12.3905L23.7862 12.3261L24.2858 10.9219L23.7862 12.3261C19.673 10.8626 15.1809 10.8626 11.0677 12.3261L10.8866 12.3905C9.45764 12.899 8.41328 14.1377 8.1537 15.6321L8.08867 16.0065C7.73461 18.0447 7.78117 20.1325 8.22572 22.153C8.52702 23.5224 9.57148 24.6068 10.9286 24.9593L11.9635 25.228C15.5463 26.1586 19.3075 26.1586 22.8904 25.228L23.9252 24.9593C25.2824 24.6068 26.3268 23.5224 26.6282 22.153C27.0727 20.1325 27.1193 18.0447 26.7652 16.0065L28.2431 15.7497C28.6305 17.9801 28.5795 20.2645 28.0931 22.4753C27.6705 24.3959 26.2057 25.9168 24.3023 26.4111L23.2675 26.6799C19.4373 27.6746 15.4166 27.6746 11.5864 26.6799L10.5516 26.4111C8.64818 25.9168 7.18334 24.3959 6.76076 22.4753C6.27433 20.2645 6.22339 17.9801 6.6108 15.7497L6.67583 15.3754C7.02802 13.3478 8.44498 11.6672 10.3838 10.9773Z"
              fill="white"
            />
            <path
              d="M10.5649 10.9129L11.1767 12.6324H11.1767L10.5649 10.9129ZM10.3838 10.9773L9.77202 9.25787L9.77202 9.25787L10.3838 10.9773ZM24.289 10.9129L23.6772 12.6324L23.6772 12.6324L24.289 10.9129ZM24.4701 10.9773L25.0819 9.25787L25.0819 9.25786L24.4701 10.9773ZM28.178 15.3754L29.9762 15.063V15.063L28.178 15.3754ZM26.7652 16.0065L24.9671 16.3188L25.2794 18.1169L27.0775 17.8046L26.7652 16.0065ZM26.7002 15.6321L28.4983 15.3197V15.3197L26.7002 15.6321ZM23.9672 12.3905L24.579 10.6711L24.579 10.6711L23.9672 12.3905ZM23.7862 12.3261L22.0667 11.7143L21.4549 13.4338L23.1744 14.0456L23.7862 12.3261ZM23.7862 12.3261L23.1744 14.0456L24.8939 14.6574L25.5057 12.9379L23.7862 12.3261ZM11.0677 12.3261L11.6795 14.0456H11.6795L11.0677 12.3261ZM10.8866 12.3905L10.2748 10.6711L10.2748 10.6711L10.8866 12.3905ZM8.1537 15.6321L6.35557 15.3197L6.35557 15.3197L8.1537 15.6321ZM8.08867 16.0065L9.88681 16.3188L9.88681 16.3188L8.08867 16.0065ZM8.22572 22.153L6.44329 22.5452H6.44329L8.22572 22.153ZM10.9286 24.9593L10.4699 26.7258H10.4699L10.9286 24.9593ZM11.9635 25.228L12.4222 23.4616L11.9635 25.228ZM22.8904 25.228L22.4317 23.4616L22.8904 25.228ZM23.9252 24.9593L24.384 26.7258L23.9252 24.9593ZM26.6282 22.153L24.8457 21.7608V21.7608L26.6282 22.153ZM26.7652 16.0065L26.4529 14.2083L24.6547 14.5207L24.9671 16.3188L26.7652 16.0065ZM28.0931 22.4753L29.8755 22.8675L28.0931 22.4753ZM24.3023 26.4111L24.7611 28.1776L24.3023 26.4111ZM23.2675 26.6799L22.8087 24.9134L23.2675 26.6799ZM11.5864 26.6799L12.0452 24.9134L11.5864 26.6799ZM10.5516 26.4111L10.0928 28.1776H10.0928L10.5516 26.4111ZM6.76076 22.4753L4.97833 22.8675L6.76076 22.4753ZM6.6108 15.7497L4.81266 15.4374L6.6108 15.7497ZM6.67583 15.3754L4.8777 15.063L6.67583 15.3754ZM9.95308 9.19344L9.77202 9.25787L10.9956 12.6968L11.1767 12.6324L9.95308 9.19344ZM24.9008 9.19344C20.0667 7.47345 14.7872 7.47345 9.95308 9.19344L11.1767 12.6324C15.2194 11.194 19.6345 11.194 23.6772 12.6324L24.9008 9.19344ZM25.0819 9.25786L24.9008 9.19344L23.6772 12.6324L23.8583 12.6968L25.0819 9.25786ZM29.9762 15.063C29.5113 12.3868 27.641 10.1684 25.0819 9.25787L23.8583 12.6968C25.1768 13.1659 26.1404 14.3089 26.3799 15.6877L29.9762 15.063ZM30.0412 15.4374L29.9762 15.063L26.3799 15.6877L26.4449 16.0621L30.0412 15.4374ZM27.0775 17.8046L28.5554 17.5479L27.9307 13.9516L26.4529 14.2083L27.0775 17.8046ZM24.902 15.9444L24.9671 16.3188L28.5633 15.6941L28.4983 15.3197L24.902 15.9444ZM23.3555 14.11C24.1641 14.3977 24.7551 15.0987 24.902 15.9444L28.4983 15.3197C28.126 13.1767 26.6283 11.4002 24.579 10.6711L23.3555 14.11ZM23.1744 14.0456L23.3555 14.11L24.579 10.6711L24.398 10.6067L23.1744 14.0456ZM22.5663 10.3101L22.0667 11.7143L25.5057 12.9379L26.0053 11.5337L22.5663 10.3101ZM25.5057 12.9379L26.0053 11.5337L22.5663 10.3101L22.0667 11.7143L25.5057 12.9379ZM11.6795 14.0456C15.397 12.7229 19.4569 12.7229 23.1744 14.0456L24.398 10.6067C19.8891 9.00238 14.9648 9.00238 10.4559 10.6067L11.6795 14.0456ZM11.4984 14.11L11.6795 14.0456L10.4559 10.6067L10.2748 10.6711L11.4984 14.11ZM9.95184 15.9444C10.0987 15.0987 10.6897 14.3977 11.4984 14.11L10.2748 10.6711C8.22553 11.4002 6.72782 13.1767 6.35557 15.3197L9.95184 15.9444ZM9.88681 16.3188L9.95184 15.9444L6.35557 15.3197L6.29053 15.6941L9.88681 16.3188ZM10.0081 21.7608C9.61455 19.9719 9.57334 18.1235 9.88681 16.3188L6.29053 15.6941C5.89589 17.966 5.94778 20.2931 6.44329 22.5452L10.0081 21.7608ZM11.3874 23.1928C10.6949 23.013 10.1619 22.4596 10.0081 21.7608L6.44329 22.5452C6.89215 24.5852 8.44809 26.2007 10.4699 26.7258L11.3874 23.1928ZM12.4222 23.4616L11.3874 23.1928L10.4699 26.7258L11.5047 26.9945L12.4222 23.4616ZM22.4317 23.4616C19.1496 24.314 15.7043 24.314 12.4222 23.4616L11.5047 26.9945C15.3884 28.0032 19.4654 28.0032 23.3492 26.9945L22.4317 23.4616ZM23.4665 23.1928L22.4317 23.4616L23.3492 26.9945L24.384 26.7258L23.4665 23.1928ZM24.8457 21.7608C24.692 22.4596 24.159 23.013 23.4665 23.1928L24.384 26.7258C26.4058 26.2007 27.9617 24.5852 28.4106 22.5452L24.8457 21.7608ZM24.9671 16.3188C25.2805 18.1235 25.2393 19.9719 24.8457 21.7608L28.4106 22.5452C28.9061 20.2931 28.958 17.966 28.5633 15.6941L24.9671 16.3188ZM27.9307 13.9516L26.4529 14.2083L27.0775 17.8046L28.5554 17.5479L27.9307 13.9516ZM29.8755 22.8675C30.4129 20.4251 30.4692 17.9013 30.0412 15.4374L26.4449 16.0621C26.7918 18.0588 26.7462 20.1039 26.3107 22.0831L29.8755 22.8675ZM24.7611 28.1776C27.3291 27.5106 29.3054 25.4587 29.8755 22.8675L26.3107 22.0831C26.0357 23.3331 25.0823 24.3229 23.8435 24.6447L24.7611 28.1776ZM23.7263 28.4463L24.7611 28.1776L23.8435 24.6447L22.8087 24.9134L23.7263 28.4463ZM11.1276 28.4463C15.2586 29.5192 19.5952 29.5192 23.7263 28.4463L22.8087 24.9134C19.2794 25.83 15.5745 25.83 12.0452 24.9134L11.1276 28.4463ZM10.0928 28.1776L11.1276 28.4463L12.0452 24.9134L11.0104 24.6447L10.0928 28.1776ZM4.97833 22.8675C5.54846 25.4587 7.52479 27.5106 10.0928 28.1776L11.0104 24.6447C9.77157 24.3229 8.81822 23.3331 8.54319 22.0831L4.97833 22.8675ZM4.81266 15.4374C4.38467 17.9013 4.44094 20.4251 4.97833 22.8675L8.54319 22.0831C8.10771 20.1039 8.06211 18.0588 8.40894 16.0621L4.81266 15.4374ZM4.8777 15.063L4.81266 15.4374L8.40894 16.0621L8.47397 15.6877L4.8777 15.063ZM9.77202 9.25787C7.21287 10.1684 5.34256 12.3868 4.8777 15.063L8.47397 15.6877C8.71348 14.3089 9.67709 13.1659 10.9956 12.6968L9.77202 9.25787Z"
              fill="white"
              mask="url(#path-2-inside-1_109_115325)"
            />
            <path
              d="M13.5 11V10C13.5 8.89543 14.3954 8 15.5 8H19.5C20.6046 8 21.5 8.89543 21.5 10V11"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
          重新拍照
        </div>
      </div>
    </FloatingPanel>
  );
};

export default RecognitionGuide;
