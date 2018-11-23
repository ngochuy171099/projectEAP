var API_Member = "https://localhost:44351/api/employees";

var API_Search = "https://localhost:44351/api/employees?=";

$(document).ready(function(){
	showList();

});

function showList(){
    $.ajax({
        url: API_Member,
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (res) {
                 let html = "";
                for (let song of res) {
                    html += `
                        <li class="list-group-item pl-0 pr-0 pt-2 pb-2">
                            <div class="row p-0">
                                <div class="col-1">
                                    <p class="text-primary">${song.id}</p>
                                </div>
    
                                <div class="col-2">
                                    <img class="img-listview-homepage float-right img-fluid"
                                         src="${song.thumbnail}">
                                </div>
    
                                <div class="col-6 p-0" style="font-size: 14px">
                                    <div><a class="text-dark" style="font-size: 16px; font-weight: 500;" href="/html/Play-Song.html?id=${song.id}">${song.name}</a></div>
                                    <span><a class="text-secondary" style="font-size: 11px"
                                             href="#">${song.singer}</a></span>
                                </div>
    
                                <div class="col-3 pr-0">
    
                                    <div style="font-size: 14px" class="mt-2 float-left pl-1 pr-2">
                                        <a class="text-secondary" href="#"><i class="fas fa-download"></i></a>
                                    </div>
    
                                    <div style="font-size: 14px" class="mt-2 float-left pl-2 pr-3">
                                        <a class="text-secondary" href="#"><i class="fas fa-plus"></i></a>
                                    </div>
    
                                    <div style="font-size: 14px" class="mt-2">
                                        <a class="text-secondary" href="#"><i class="fas fa-share-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    `
                }
                $("#ListSongs").html(html);
                console.log(res);
            },

        error: function (e) {
                console.log(e.responeText);
            },  
    });
}

var btnSubmit = document.getElementById("btnSubmit");

btnSubmit.onclick = function(){
        searchForm();
    }

function searchForm(){
    var hihi = document.getElementById("search").value;
  
    $.ajax({
        url: "https://localhost:44351/api/employees?="+hihi,
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (res) {
                 let html = "";
                for (let song of res) {
                    html += `
                        <li class="list-group-item pl-0 pr-0 pt-2 pb-2">
                            <div class="row p-0">
                                <div class="col-1">
                                    <p class="text-primary">${song.id}</p>
                                </div>
    
                                <div class="col-2">
                                    <img class="img-listview-homepage float-right img-fluid"
                                         src="${song.thumbnail}">
                                </div>
    
                                <div class="col-6 p-0" style="font-size: 14px">
                                    <div><a class="text-dark" style="font-size: 16px; font-weight: 500;" href="/html/Play-Song.html?id=${song.id}">${song.name}</a></div>
                                    <span><a class="text-secondary" style="font-size: 11px"
                                             href="#">${song.singer}</a></span>
                                </div>
    
                                <div class="col-3 pr-0">
    
                                    <div style="font-size: 14px" class="mt-2 float-left pl-1 pr-2">
                                        <a class="text-secondary" href="#"><i class="fas fa-download"></i></a>
                                    </div>
    
                                    <div style="font-size: 14px" class="mt-2 float-left pl-2 pr-3">
                                        <a class="text-secondary" href="#"><i class="fas fa-plus"></i></a>
                                    </div>
    
                                    <div style="font-size: 14px" class="mt-2">
                                        <a class="text-secondary" href="#"><i class="fas fa-share-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    `
                }
                $("#ListSongs").html(html);
                console.log(res);
            },

        error: function (e) {
            console.log(e);
        }
    });

}