#!/bin/bash -e
buildDir=$(pwd)
rm -rf Build/opencv
rm -rf Install/opencv

mkdir -p Build/opencv
mkdir -p Install/opencv
CMAKE_CONFIG_GENERATOR="Unix Makefiles"
if [  ! -d "$buildDir/opencv"  ]; then
    echo "cloning opencv"
    git clone https://github.com/opencv/opencv.git

else
    # cd opencv
    # git pull --rebase
    # cd ..
    echo "reuse opencv"
fi
if [  ! -d "$buildDir/opencv_contrib"  ]; then
    echo "cloning opencv_contrib"
    git clone https://github.com/opencv/opencv_contrib.git
    mkdir -p Build/opencv_contrib
else
    # cd opencv_contrib
    # git pull --rebase
    # cd ..
    echo "reuse opencv_contrib"
fi
CV=opencv

pushd Build/$CV
CMAKE_OPTIONS='-DBUILD_ZLIB:=OFF -DBUILD_PERF_TESTS:BOOL=OFF -DBUILD_TESTS:BOOL=OFF -DBUILD_DOCS:BOOL=OFF  -DWITH_CUDA:BOOL=OFF -DBUILD_EXAMPLES:BOOL=ON -DINSTALL_CREATE_DISTRIB=ON'
# add below line to the generator if you want to build contrib modules
# -DOPENCV_EXTRA_MODULES_PATH="$buildDir"/opencv_contrib/modules

cmake -G"$CMAKE_CONFIG_GENERATOR" $CMAKE_OPTIONS  -DCMAKE_INSTALL_PREFIX="$buildDir"/install/"$CV" "$buildDir/$CV"
# echo "************************* $Source_DIR -->debug"
# cmake --build .  --config debug
#echo "************************* $Source_DIR -->release"
#cmake --build .  --config release
cmake --build .  --target install
# cmake --build .  --target install --config debug
popd