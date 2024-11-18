// let a = prompt('a = ')
// let b = prompt('b = ')

// let loy = prompt('math')

// if (loy == '+'){
//     console.log('${a} + ${b} = ${a + b}')
// }
// else if (loy == '-'){
//     console.log('${a} - ${b} = ${a - b}')

// }
// else if (loy == '/'){
//     console.log('${a} / ${b} = ${a / b}')

// }
// else{
//     console.log('${a} * ${b} = ${a * b}')}

const URL = 'https://jsonplaceholder.typicode.com/posts'
const container = document.getElementById('root');

const loaderSpinner = `
        <div class="border border-slate-500 rounded shadow-slate-500 shadow w-1/2  pt-5 px-10">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-20 w-20"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                    </div>
                </div> 
`;


(async function fetchPosts() {
    container.innerHTML = loaderSpinner;

    const response = await fetch(URL)
    const data = await response.json()


    container.innerHTML = "";

    data.forEach(  async post => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + post.userId);
        const userData = await response.json();

        container.innerHTML += `
        <div class="border border-slate-500 rounded shadow-slate-500 shadow w-1/2 pt-5 px-10">
            <h2 class="text-3xl text-center ">
                <span class="font-bold">Tittle</span>
                ${post.title}
            </h2>
            <p class="h-1 w-full bg-slate-300 my-4"></p>
            <p class="text-xl">
                ${post.body}
            </p>
            <p class="h-1 w-full bg-slate-300 my-4"></p>

            <h2 class="font-2xl">
                <span class="font-bold">Author</span>
                <b>
                    <i class="text-slate-500">
                        ${userData.name} - ${ userData.email}
                    </i>
                </b>
            </h2>

        </div>
        `

        });



})();
