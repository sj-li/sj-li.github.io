if __name__ == '__main__':
    _header = '## Hi there 👋'
    base_dir = '../_pages/includes/'
    _intro = open(f'{base_dir}/intro.md').read().strip()
    _news = open(f'{base_dir}/news.md').read().strip()
    _pub = open(f'{base_dir}/pub.md').read().strip()
    _honers = open(f'{base_dir}/honers.md').read().strip()
    _others = open(f'{base_dir}/others.md').read().strip()
    with open('README.md', 'w') as f:
        f.write(_header)
        f.write('\n\n')
        f.write(_intro)
        f.write('\n\n##')
        f.write(_others)
        f.write('\n\n##')
        f.write(_news)
        f.write('\n\n##')
        f.write(_pub)
