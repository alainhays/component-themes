<?php
namespace Prometheus;
class FooterText extends Component {
	public function render() {
		$text = $this->getProp( 'text', '<a href="/">Create a free website or blog at WordPress.com.</a>' );
		return "<div class='" . $this->getProp( 'className' ) . "'>{$text}</div>";
	}
}
