import { ChevronDown, Minus, Plus } from 'lucide-react';
import oilimage from '../assets/images/vegetables.png';
export default () =>{
    return (

        <div class="grid grid-cols-3 items-center gap-4">
        <div class="col-span-2 flex items-center gap-4">
            <div class="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                <img src={oilimage} class="w-full h-full object-cover" />
            </div>

            <div>
                <h3 class="text-base font-bold text-gray-800">Keg of Red Oil</h3>
                <h6 class="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                <div class="flex gap-4 mt-4">
                   
                    <div>
                        <button type="button"
                            class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                           <Minus className='text-gray-950 w-2.5 h-3'  color='black'/>
                                
                            <span class="mx-2.5">1</span>
                           
                           <Plus className='text-gray-950 w-2.5 h-3'  color='black'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ml-auto">
            <h4 class="text-base font-bold text-gray-800">₦20,000</h4>
        </div>
    </div>
    )
}