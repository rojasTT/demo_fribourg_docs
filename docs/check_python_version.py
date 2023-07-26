import sys

if __name__ == "__main__":
    installed_version = sys.version_info

    if installed_version[0] == 3 and installed_version[1] >= 6:
        print('Python version: OK')
        sys.exit(0)  # 3 and at least .6
    else:
        print('Python version: FAILED')
        sys.exit(1)  # Python version is lower than desired_version
