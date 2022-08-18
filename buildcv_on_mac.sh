#!/bin/bash -e
buildDir=$(pwd)
mkdir -p Build/opencv
mkdir -p Install/opencv
CMAKE_CONFIG_GENERATOR="Unix Makefiles"
if [  ! -d "$buildDir/opencv"  ]; then
    echo "cloning opencv"
    git clone https://github.com/opencv/opencv.git
    #git clone https://gitee.com/mirrors/opencv.git

else
    cd opencv
    git pull --rebase
    cd ..
fi
if [  ! -d "$buildDir/opencv_contrib"  ]; then
    echo "cloning opencv_contrib"
    git clone https://github.com/opencv/opencv_contrib.git
    #git clone https://gitee.com/opencv-lhd/opencv_contrib.git
    mkdir -p Build/opencv_contrib
else
    cd opencv_contrib
    git pull --rebase
    cd ..
fi
CV=opencv
pushd Build/$CV
CMAKE_OPTIONS='-DBUILD_PERF_TESTS:BOOL=OFF -DBUILD_TESTS:BOOL=OFF -DBUILD_DOCS:BOOL=OFF  -DWITH_CUDA:BOOL=OFF -DBUILD_EXAMPLES:BOOL=ON -DINSTALL_CREATE_DISTRIB=ON'
cmake -G"$CMAKE_CONFIG_GENERATOR" $CMAKE_OPTIONS -DOPENCV_EXTRA_MODULES_PATH="$buildDir"/opencv_contrib/modules -DCMAKE_INSTALL_PREFIX="$buildDir"/install/"$CV" "$buildDir/$CV"
echo "************************* $Source_DIR -->debug"
cmake --build .  --config debug
echo "************************* $Source_DIR -->release"
cmake --build .  --config release
cmake --build .  --target install --config release
#cmake --build .  --target install --config debug
popd
