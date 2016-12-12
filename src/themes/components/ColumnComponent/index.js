/* globals window */
const ComponentThemes = window.ComponentThemes;
const { React, registerComponent, omit } = ComponentThemes;

const ColumnComponent = ( props ) => {
	const { children, className } = props;
	const childProps = omit( props, [ 'children', 'className' ] );
	const newChildren = React.Children.map( children, child => React.cloneElement( child, { ...childProps } ) );
	return (
		<div className={ className }>
			{ newChildren }
		</div>
	);
};

ColumnComponent.description = 'A generic layout component for rendering children with no styling included.';
ColumnComponent.hasChildren = true;

registerComponent( 'ColumnComponent', ColumnComponent );
