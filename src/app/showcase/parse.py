raw = """<iframe frameborder="0" src="https://itch.io/embed/2788227?linkback=true&amp;bg_color=000&amp;fg_color=fff&amp;link_color=fff&amp;border_color=777" width="552" height="167"><a href="https://asianerd.itch.io/asteroid">Asteroid by asianerd</a></iframe>"""

def parse_data(d):
    c = [i for i in d.split('<') if i and (i[0] != '/')]
    return {
        'name': c[-1].split('">')[-1].split(' by ')[0],
        'author': c[-1].split('">')[-1].split(' by ')[1],
        'embedURL': [i for i in c[0].split(' ') if 'src' in i][0].split('="')[1][0:-1],
        'embedLink': c[-1].split('">')[0].split('="')[-1],
        'highlighted': False,
        'year': 0
    }

print(parse_data(raw))
