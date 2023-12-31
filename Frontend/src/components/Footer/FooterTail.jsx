import React from 'react'

const FooterTail = () => {
  return (
    <div class=" bg-yellow-500">
        <div class="max-w-2xl mx-auto text-white py-10">
            <div class="text-center">
                <h3 class="text-3xl mb-3"> Download our App </h3>
                <p> Easy Order. Fast Deilvery, every day. </p>
                <div class="flex justify-center my-10">
                    <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"/>
                        <div class="text-left ml-3">
                            <p class='text-xs text-gray-200'>Download on </p>
                            <p class="text-sm md:text-base"> Google Play Store </p>
                        </div>
                    </div>
                    <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8"/>
                        <div class="text-left ml-3 cursor-pointer">
                            <a href='#' class='text-xs text-gray-200 '>Download on </a>
                            <a href='#' class="text-sm md:text-base "> Apple Store </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-black">
                <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2023. </p>
                <div class="order-1 md:order-2">
                    <a href='/about'><span class="px-2">About us</span></a>
                    <a href='/menu'><span class="px-2 border-l">Menu</span></a>
                    <span class="px-2 border-l">Privacy Policy</span>
                </div>
            </div>
        </div>
    </div>  )
}

export default FooterTail