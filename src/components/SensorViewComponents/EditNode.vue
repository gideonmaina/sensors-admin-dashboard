
<template >
    <div class="mx-4 my-4">
        <div>
            <div class="flex flex-col gap-8">
                <div class="flex">
                    <label for="nodeID">Node Id</label>
                    <input name="nodeID" type="text"
                        class="border px-3 py-1 shadow-sm border-slate-300 focus:border-blue-500" />
                </div>
                <div class="flex">
                    <label>Custodian</label>
                    <select id="custodians" class="w-80 p-2 border border rounded-sm focus:ring-blue-500">
                        <option selected>Choose a custodian from the dropdown</option>
                        <option value="CFA">CFA</option>
                        <option value="GoDown">GoDown</option>
                        <option value="August 7th">August 7th</option>
                        <option value="MSJC">MSJC</option>

                    </select>
                </div>
                <div class="flex">
                    <label>Location</label>
                    <select id="custodians" class="w-80 p-2 border border rounded-sm focus:ring-blue-500">
                        <option selected>Choose a location from the dropdown</option>
                        <option value="CBD">CBD</option>
                        <option value="Kilimani">Kilimani</option>
                        <option value="Nakuru">Nakuru</option>
                        <option value="Mathare">Mathare</option>

                    </select>
                </div>
                <div class="flex">
                    <label>Description</label>
                    <textarea class="border w-80 h-32"> </textarea>
                </div>
            </div>

            <div class="flex mt-8">
                
                    <v-checkbox>
                    <template v-slot:label>
                
                
                            <span> I confirm everything is okay</span>
                
                    </template>
                    </v-checkbox>
                <v-btn>Update</v-btn>
            </div>
        </div>
    </div>
</template>

<style scoped> label {
     width: 200px;
     min-width: 200px;
 }
</style>