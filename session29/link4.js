let Job = [];
let choice;

do {
  choice = +prompt(
      "==============MENU============\n" +
      "1.Thêm công việc mới.\n" +
      "2.Hiển thị tất cả các công việc.\n" +
      "3.Cập nhật trạng thái công việc theo id.\n" +
      "4.Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.\n" +
      "5.Sắp xếp các công việc theo trạng thái công việc.\n"+
      "6.Thoát.\n"+
      "=================================\n\n" +
      "Lựa chọn của bạn:"
  );

  switch (choice) {
      case 1:
        let id = parseInt(prompt("Nhập ID công việc: "));
        let title = prompt("Nhập tên công việc: ");
        let discribe = prompt("Nhập mô tả: ");
        let year = parseInt(prompt("Nhập Thời gian bắt đầu: "));
        let isAvailable = confirm("trạng thái công việc công việc không? (OK: Hoàn thành, Cancel: Chưa hoàn thành)");
        addJob(id, title, discribe, year, isAvailable);
          break;

      case 2:
          displayJobs();
          break;

      case 3:
          UpdateJobs();
          break;
      case 4 :
        SearchJob();
        break;

      case 5 :
        Sortjob();
        break;

      case 6:
          alert("kết thúc chương trình!");
          break;

      default:
          alert("Vui lòng nhập số từ 1 đến 6.");
  }
} while (choice !== 6);

function addJob(){
  let newJob = prompt("Thêm công việc vào danh sách: ");
}

function addJob(id, title, discribe, year,isAvailable) {
  Job.push({ id, title, discribe, year,isAvailable });
}

function displayJobs() {
  alert("Danh sách công việc:");
  alert(Job => {
      alert(`${Job.id} - ${Job.title} - ${Job.discribe} - ${Job.year} - ${Job.isAvailable ? "Hoàn thành" : "chưa hoàn thành"}`);
  });
}

function UpdateJobs() {
  let id = parseInt(prompt("Nhập ID công việc cần cập nhật: "));
  let job = Job.find((j) => j.id === id);

  if (job) {
    job.isAvailable = confirm(
      "Cập nhật trạng thái công việc? (OK: Hoàn thành, Cancel: Chưa hoàn thành)"
    );
    alert("Cập nhật thành công!");
  } else {
    alert("Không tìm thấy công việc với ID đã nhập.");
  }
}

function SearchJob() {
  let completed = confirm(
    "Bạn muốn xem công việc nào? (OK: Hoàn thành, Cancel: Chưa hoàn thành)"
  );
  let filteredJobs = Job.filter((job) => job.isAvailable === completed);

  if (filteredJobs.length === 0) {
    alert("Không có công việc nào phù hợp.");
    return;
  }

  alert("Danh sách công việc:");
  filteredJobs.forEach((job) => { 
    alert(
      `${job.id} - ${job.title} - ${job.describe} - ${job.year} - ${
        job.isAvailable ? "Hoàn thành" : "Chưa hoàn thành"
      }`
    );
  });
  
}

function SortJob() {
  Job.sort((a, b) => a.isAvailable - b.isAvailable);
  alert("Đã sắp xếp công việc!");
  displayJobs();
}
