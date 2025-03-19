let courses = [];
let users = [];


    let choice;
    do {
        choice = +prompt(`
        1. Quản lý khóa học
        2. Quản lý người dùng
        3. Thoát
        `);
        switch (choice) {
            case 1:
                courseManagement();
                break;
            case 2:
                userManagement();
                break;
            case 3:
                console.log("Chương trình kết thúc");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 3);


function courseManagement() {
    let choice;
    do {
        choice = +prompt(`
        1. Thêm khóa học
        2. Tìm kiếm khóa học
        3. Xóa khóa học
        4. Thoát
        `);
        switch (choice) {
            case 1:
                addCourse();
                break;
            case 2:
                searchCourse();
                break;
            case 3:
                deleteCourse();
                break;
            case 4:
                console.log("Thoát quản lý khóa học");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 4);
}

function userManagement() {
    let choice;
    do {
        choice = +prompt(`
        1. Thêm người dùng
        2. Đăng ký khóa học
        3. Hủy đăng ký khóa học
        4. Hiển thị danh sách khóa học của người dùng
        5. Thoát
        `);
        switch (choice) {
            case 1:
                addUser();
                break;
            case 2:
                registerCourse();
                break;
            case 3:
                unregisterCourse();
                break;
            case 4:
                showUserCourses();
                break;
            case 5:
                console.log("Thoát quản lý người dùng");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 5);
}


function addCourse() {
    let id = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên khóa học:");
    let instructor = prompt("Nhập tên giáo viên:");

    if (!name || !instructor) {
        console.log("Tên khóa học và giáo viên không được để trống!");
        return;
    }

    let course = { id, name, instructor, students: [] };
    courses.push(course);
    console.log("Thêm khóa học thành công!", course);
}

function searchCourse() {
    let keyword = prompt("Nhập tên khóa học cần tìm:");
    let result = courses.filter(course => course.name.toLowerCase().includes(keyword.toLowerCase()));
    
    if (result.length === 0) {
        console.log("Không tìm thấy khóa học!");
    } else {
        console.log("Kết quả tìm kiếm:", result);
    }
}

function deleteCourse() {
    let courseId = +prompt("Nhập ID khóa học cần xóa:");
    let index = courses.findIndex(course => course.id === courseId);

    if (index !== -1) {
        courses.splice(index, 1);

        users.forEach(user => {
            user.registeredCourses = user.registeredCourses.filter(id => id !== courseId);
        });

        console.log("Xóa khóa học thành công!");
    } else {
        console.log("Không tìm thấy khóa học!");
    }
}


function addUser() {
    let id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên người dùng:");

    if (!name) {
        console.log("Tên người dùng không được để trống!");
        return;
    }

    let user = { id, name, registeredCourses: [] };
    users.push(user);
    console.log("Thêm người dùng thành công!", user);
}

function registerCourse() {
    let userId = +prompt("Nhập ID người dùng:");
    let user = users.find(u => u.id === userId);

    if (!user) {
        console.log("Không tìm thấy người dùng!");
        return;
    }

    let courseId = +prompt("Nhập ID khóa học muốn đăng ký:");
    let course = courses.find(c => c.id === courseId);

    if (!course) {
        console.log("Không tìm thấy khóa học!");
        return;
    }

    if (user.registeredCourses.includes(courseId)) {
        console.log("Bạn đã đăng ký khóa học này!");
        return;
    }

    user.registeredCourses.push(courseId);
    course.students.push(userId);
    console.log("Đăng ký khóa học thành công!");
}

function unregisterCourse() {
    let userId = +prompt("Nhập ID người dùng:");
    let user = users.find(u => u.id === userId);

    if (!user) {
        console.log("Không tìm thấy người dùng!");
        return;
    }

    let courseId = +prompt("Nhập ID khóa học muốn hủy đăng ký:");
    let course = courses.find(c => c.id === courseId);

    if (!course || !user.registeredCourses.includes(courseId)) {
        console.log("Khóa học không tồn tại hoặc chưa được đăng ký!");
        return;
    }

    user.registeredCourses = user.registeredCourses.filter(id => id !== courseId);
    course.students = course.students.filter(id => id !== userId);
    console.log("Hủy đăng ký khóa học thành công!");
}

function showUserCourses() {
    let userId = +prompt("Nhập ID người dùng:");
    let user = users.find(u => u.id === userId);

    if (!user) {
        console.log("Không tìm thấy người dùng!");
        return;
    }

    if (user.registeredCourses.length === 0) {
        console.log("Người dùng chưa đăng ký khóa học nào!");
        return;
    }

    let userCourses = user.registeredCourses.map(id => courses.find(course => course.id === id));
    console.log("Danh sách khóa học của người dùng:", userCourses);
}


mainMenu();