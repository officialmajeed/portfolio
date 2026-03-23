import urllib.request

url = "https://bestfreefonts.com/assets/fonts/sinistre/Sinistre.zip"
req = urllib.request.Request(
    url, 
    data=None, 
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://bestfreefonts.com/sinistre',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
    }
)

with urllib.request.urlopen(req) as response:
    with open("Sinistre.zip", "wb") as f:
        f.write(response.read())

print("Downloaded successfully.")
