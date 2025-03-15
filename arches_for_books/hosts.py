import re
from django_hosts import patterns, host

host_patterns = patterns(
    "",
    host(re.sub(r"_", r"-", r"arches_for_books"), "arches_for_books.urls", name="arches_for_books"),
)
