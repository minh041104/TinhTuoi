function showAge() {
    var age = document.getElementById("ageInput").value;
    var confirmMessage = "Bạn có chắc chắn đây là tuổi của bạn?";
    
    if (age !== "") {
        if (age >= 1 && age <= 150) {
            $('#confirmModal').modal('show');
            $('#confirmModal').on('shown.bs.modal', function () {
                $('#confirmButton').click(function () {
                    document.getElementById("result").innerHTML = "Tuổi của bạn là: " + age;
                    $('#confirmModal').modal('hide');
                });
                $('#cancelButton').click(function () {
                    $('#confirmModal').modal('hide');
                });
            });
        } else {
            alert("Vui lòng nhập tuổi từ 1 đến 150!");
        }
    } else {
        alert("Vui lòng nhập tuổi của bạn!");
    }
}
