$(document).ready(function () {

    //加载所有组信息
    url = '/getGroupInformation';
    $.get(url, function (data, status) {
        if (status == 'success' && data != "") {
            var obj = eval(data);

            allGroup = obj.allGroup;
            allBossName = obj.allBossName;
            setPictureWall();
            lastOrder = obj.lastOrder;
            myGroup = obj.myGroup;


            //当前没有订单
            if(lastOrder != null){
                //today order
                var table = $('<table></table>');
                var tr = $('<tr class="title"></tr>');

                //设置标题
                tr.append($('<td>套餐名称</td>'))
                    .append($('<td>数量</td>'))
                    .append($('<td>总价</td>'));
                tr.appendTo(table);


                //订单内容
                var tr2 = $('<tr></tr>');
                tr2.appendTo(table);
                var orderNumber = lastOrder.orderNumber,
                    orderName = lastOrder.orderName,
                    orderPrice = lastOrder.orderPrice;
                var tdOrderName = $('<td class="order-name">' + orderName + '</td>'),
                    tdOrderNumber = $('<td>' + orderNumber + '</td>'),
                    tdOrderPrice = $('<td>' + orderPrice + '</td>');
                tdOrderName.appendTo(tr2);
                tdOrderNumber.appendTo(tr2);
                tdOrderPrice.appendTo(tr2);

                $('.order-details').animate({"height": "320px"}, 2000);
                $('.order-details h1').css("display", "block");
                $('.order-content').css("display", "block");

                if (obj.groupId != undefined)
                    $('#currentOrder').attr('href', 'getGroupInfo?groupId=' + obj.groupId);
                table.appendTo($(".order-content"));
            }


            ////我的小组信息
            //var groupNum = myGroup.length,
            //    perPageNum = 5,
            //    current = 0,
            //    page_num = ((groupNum % perPageNum) == 0) ? (groupNum / perPageNum) : (parseInt(groupNum / perPageNum) + 1),
            //    cur_page = 0;
            //
            //for (var i = 0; i < page_num; i++) {
            //    var content = '<span class=\"ring\"></span>';
            //    if (i == cur_page) {
            //        content = '<span class=\"ring circle\"></span>';
            //    }
            //    $('.my-groups .page').append(content);
            //}
            //
            ///*img-show*/
            //for (var i = 0; (i < perPageNum) && (i < groupNum); i++) {
            //    var groupName = myGroup[i].groupName;
            //    var groupId = myGroup[i].id;
            //    var groupLink = '/getGroupInfo?groupId=' + myGroup[i].id;
            //    var content = '<div class="my-group"> <a href=\"' + groupLink + '\" >' + groupName + '</a> </div>';
            //    $('.my-groups-content').append(content);
            //}
            //current = i;
            //
            ///*next page  event listener*/zhij
            //$('.my-groups .next').click(function () {
            //    var page_circle = $('.my-groups .page .ring');
            //    if (page_num > 1) {
            //        $(page_circle[cur_page++]).removeClass('circle');
            //        $(page_circle[cur_page]).addClass('circle');
            //    }
            //    if (current < groupNum) {
            //        $('.my-groups-content').remove();
            //        for (var i = current; (i < (current + perPageNum) && (i < groupNum)); i++) {
            //            var groupName = myGroup[i].groupName;
            //            var groupId = myGroup[i].groupId;
            //            var groupLink = '/getGroupInfo?groupId=' + myGroup[i].groupId;
            //            var content = '<div class="my-group"> <a href=\"' + groupLink + '\" >' + groupName + '</a> </div>';
            //            $('.my-groups-content').append(content);
            //        }
            //    }
            //    current = i;
            //    if (cur_page > 0)    $('.my-groups-content .pre').css("display", "block");
            //    if (cur_page == page_num - 1) $('.my-groups-content .next').css("display", "none");
            //});
            //
            ///*previous page event listener*/
            //$('.my-groups-content .pre').click(function () {
            //    var page_circle = $('.my-groups-content .page .ring');
            //    if (cur_page > 0) {
            //        $(page_circle[cur_page]).removeClass('circle');
            //        cur_page--;
            //        $(page_circle[cur_page]).addClass('circle');
            //    }
            //    current = cur_page * (perPageNum);
            //    if (cur_page == 0) $('.my-groups-content .pre').css("display", "none");
            //    if (cur_page < (page_num - 1)) $('.my-groups-content .next').css("display", "block");
            //    $('.my-groups-content').remove();
            //    for (var i = current; i < (current + (row_num * col_num)); i++) {
            //        var groupName = myGroup[i].groupName;
            //        var groupId = myGroup[i].groupId;
            //        var groupLink = '/getGroupInfo?groupId=' + myGroup[i].groupId;
            //        var content = '<div class="my-group"> <a href=\"' + groupLink + '\" >' + groupName + '</a> </div>';
            //        $('.my-groups-content').append(content);
            //    }
            //    current = i;
            //});
        }
    });
});
