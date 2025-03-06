document.getElementById('login-btn').addEventListener('click', function() { document.getElementById('login-modal').style.display = 'flex'; });

document.querySelector('.close').addEventListener('click', function() { document.getElementById('login-modal').style.display = 'none'; });

document.getElementById('submit-login').addEventListener('click', function() { const username = document.getElementById('username').value; const password = document.getElementById('password').value; if (username === 'admin' && password === 'admin123') { alert('Login berhasil!'); document.getElementById('login-modal').style.display = 'none'; document.getElementById('admin-panel').classList.remove('hidden'); } else { alert('Username atau password salah!'); detectBruteForce(); } });

function detectBruteForce() { const alertList = document.getElementById('alert-list'); const alertItem = document.createElement('li'); alertItem.textContent = 'Peringatan: Percobaan login gagal terdeteksi!'; alertList.appendChild(alertItem); }

function detectSQLInjection(input) { const sqlPatterns = ["' OR 1=1 --", 'DROP TABLE', 'SELECT * FROM', 'INSERT INTO', 'DELETE FROM']; for (const pattern of sqlPatterns) { if (input.includes(pattern)) { const alertList = document.getElementById('alert-list'); const alertItem = document.createElement('li'); alertItem.textContent = 'Peringatan: Potensi serangan SQL Injection terdeteksi!'; alertList.appendChild(alertItem); break; } } }

document.getElementById('username').addEventListener('input', function() { detectSQLInjection(this.value); });

document.getElementById('password').addEventListener('input', function() { detectSQLInjection(this.value); });

