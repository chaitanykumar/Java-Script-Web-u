let users=[{"id":1,"first_name":"Cullen","email":"cbauld0@gnu.org","gender":"Male"},
{"id":2,"first_name":"Shelby","email":"stuffs1@youtube.com","gender":"Bigender"},
{"id":3,"first_name":"Dewie","email":"dzohrer2@google.com.hk","gender":"Male"},
{"id":4,"first_name":"Margette","email":"mminchi3@craigslist.org","gender":"Female"},
{"id":5,"first_name":"Cayla","email":"calster4@blinklist.com","gender":"Female"},
{"id":6,"first_name":"Mercie","email":"mbatham5@example.com","gender":"Female"},
{"id":7,"first_name":"Leigh","email":"lmatityahu6@ihg.com","gender":"Female"},
{"id":8,"first_name":"Bennie","email":"bgorwood7@biglobe.ne.jp","gender":"Female"},
{"id":9,"first_name":"Efren","email":"eewens8@vkontakte.ru","gender":"Male"},
{"id":10,"first_name":"Melania","email":"mbrechin9@bravesites.com","gender":"Female"}]

function display_data(){
let rows='';
for(let user of users ){
    rows=rows+`<tr>
                    <td>${user.id}</td>
                    <td>${user.first_name.toUpperCase()}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                </tr>`
}


    document.getElementById('user_data').innerHTML=rows
}