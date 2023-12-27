import { fetch } from 'Cloudflare-Workers';

if (ENVIRONMENT.npm_start) {
   // Chạy lệnh npm start trong thư mục /path/to/project
  const childProcess = Deno.run({
    cmd: ['npm start'],
  });

  // Kiểm tra trạng thái của tiến trình con
  const status = await childProcess.status();

  // Nếu tiến trình con chạy thành công, trả về phản hồi thành công
  if (status.code === 0) {
    event.respondWith(
      new Response('npm start ran successfully', {
        status: 200,
      })
    );
  }
  // Nếu tiến trình con không chạy thành công, trả về phản hồi lỗi
  else {
    event.respondWith(
      new Response('npm start failed', {
        status: 500,
      })
    );
  }
  }
// Xử lý sự kiện yêu cầu
addEventListener('fetch', (event) => {
  // Lấy yêu cầu
  const request = event.request;

  // Xử lý yêu cầu theo phương thức
  switch (request.method) {
    case 'GET':
      // Xử lý yêu cầu GET
      handleGet(request, event);
      break;

    case 'POST':
      // Xử lý yêu cầu POST
      handlePost(request, event);
      break;

    // Các phương thức khác
    default:
      // Trả về lỗi 405 Method Not Allowed
      event.respondWith(
        new Response('Method Not Allowed', { status: 405 })
      );
      break;
  }
});

// Xử lý yêu cầu GET
async function handleGet(request, event) {
  // Lấy URL của yêu cầu
  const url = request.url;

  // Gửi yêu cầu đến URL đó
  const response = await fetch(url);

  // Trả về phản hồi
  event.respondWith(response);
}

// Xử lý yêu cầu POST
async function handlePost(request, event) {
  // Lấy dữ liệu từ yêu cầu
  const data = await request.json();

  // Xử lý dữ liệu

  // Trả về phản hồi
  event.respondWith(
    new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  );
}